import React, { useState } from 'react';
import { newMember } from './firebase';

export default function Signup() {
    const [submitted, setSubmitted] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [netid, setNetid] = useState("");
    const [major, setMajor] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        newMember(firstName, lastName, email, netid, major, year);
        setSubmitted(1);
    }

    return (
        <div className="flex justify-center w-full h-full">
            {submitted ? (<div>User Added</div>) :
                (<form className="flex flex-col content-center gap-2 w-1/3 h-full" onSubmit={handleSubmit}>
                    <p className="font-sans">First Name</p>
                    <input 
                        className="bg-gray-200 rounded w-full h-10 p-2" 
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <p className="">Last Name</p>
                    <input 
                        className="bg-gray-200 rounded w-full h-10 p-2" 
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} 
                        required
                    />
                    <p className="">Northwestern Email</p>
                    <input 
                        className="bg-gray-200 rounded w-full h-10 p-2" 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <p className="">NetID</p>
                    <input 
                        className="bg-gray-200 rounded w-full h-10 p-2" 
                        type="text"
                        value={netid}
                        onChange={(e) => setNetid(e.target.value)}                   
                        required
                    />
                    <p className="">Major</p>
                    <input
                        className="bg-gray-200 rounded w-full h-10 p-2" 
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                        type="text" 
                        required
                    />
                    <p className="">Graduation Year</p>
                    <select className="bg-gray-200 rounded w-full h-10 p-2" value={year} onChange={(e) => setYear(e.target.value)} id="" required>
                        <option value="" disabled selected></option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="Other">Other</option>
                    </select>
                    <button className='bg-nupurple text-white rounded w-1/3 self-center hover:bg-purple-800' type='submit'>Join</button>
                </form>)}
        </div>
    );
}