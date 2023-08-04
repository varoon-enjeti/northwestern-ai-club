import React from 'react';

export default function Signup() {
    return (
        <div className="flex justify-center w-full">
            <form className="flex-col justify-center content-center w-1/3" action="">
                <p className="font-sans">First Name</p>
                <input className="bg-gray-200 rounded w-full h-10" type="text"/>
                <p className="">Last Name</p>
                <input className="bg-gray-200 rounded w-full h-10" type="text"/>
                <p className="">Northwestern Email</p>
                <input className="bg-gray-200 rounded w-full h-10" type="text"/>
                <p className="">Major</p>
                <input className="bg-gray-200 rounded w-full h-10" type="text"/>
                <p className="">Graduation Year</p>
                <select className="bg-gray-200 rounded w-full h-10" name="year" id="">
                    <option value="" disabled selected>-- select a year --</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="Other">Other</option>
                </select>
                <input className='bg-gray-300 rounded' type="submit" value="Join"/>
            </form>
        </div>
    );
}