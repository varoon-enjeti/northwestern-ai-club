import React from 'react';

export default function Signup() {
    return (
        <div className="flex justify-center w-full h-full">
            <form className="flex flex-col content-center gap-2 w-1/3 h-full" action="">
                <p className="font-sans">First Name</p>
                <input className="bg-gray-200 rounded w-full h-10" type="text" required/>
                <p className="">Last Name</p>
                <input className="bg-gray-200 rounded w-full h-10" type="text" required/>
                <p className="">Northwestern Email</p>
                <input className="bg-gray-200 rounded w-full h-10" type="text" required/>
                <p className="">Major</p>
                <input className="bg-gray-200 rounded w-full h-10" type="text" required/>
                <p className="">Graduation Year</p>
                <select className="bg-gray-200 rounded w-full h-10" name="year" id="" required>
                    <option value="" disabled selected>-- select a year --</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="Other">Other</option>
                </select>
                <input className='bg-nupurple text-white rounded w-1/3 self-center hover:bg-purple-800' type="submit" value="Join"/>
            </form>
        </div>
    );
}