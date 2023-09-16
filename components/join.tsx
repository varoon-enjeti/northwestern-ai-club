'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'

export default function Join() {
    const [submitted, setSubmitted] = useState(0);

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const firstName: string =  (event.currentTarget.elements[0] as HTMLInputElement).value
        const lastName: string =  (event.currentTarget.elements[1] as HTMLInputElement).value
        const email: string =  (event.currentTarget.elements[2] as HTMLInputElement).value
        const netid: string =  (event.currentTarget.elements[3] as HTMLInputElement).value
        const major: string =  (event.currentTarget.elements[4] as HTMLInputElement).value
        const year: string =  (event.currentTarget.elements[5] as HTMLInputElement).value
        console.log(firstName, lastName, email, netid, major, year)
        setSubmitted(1)
        // const response = await fetch('/api/submit', {
        //     method: 'POST',
        //     body: formData,
        // })
    }

    // bg-gradient-to-br from-nupurple via-nulight to-white

    return (
        <div className="w-full h-full " id="join">
            {submitted ? 
            (
                <div className='h-full w-full flex flex-col gap-7 pt-8 justify-center items-center'>
                    <p className="text-white font-sans font-bold text-4xl 2xl:text-5xl tracking-tight">Join the Club!</p>
                    <div className="flex flex-col items-center w-1/3 h-[470px] p-10 bg-white drop-shadow-lg rounded-3xl">
                        <Image
                            src="/nuai.png"
                            alt='Northwestern AI logo'
                            width={275}
                            height={275}
                            className='-mt-6 animate-[loadOne_2.5s_ease]'
                        />
                        <p className="text-nupurple font-sans font-bold text-4xl tracking-tight -mt-6 animate-[loadTwo_2.5s_ease]">Thanks for Joining!</p>
                        <p className="text-nulight font-sans text-md tracking-tight animate-[loadThree_2.5s_ease]">An email confirmation has been sent.</p>
                    </div>
                </div>
            ) 
            : 
            (
                <div className='h-full w-full flex flex-col gap-7 pt-8 justify-center items-center'>
                    <p className="text-white font-sans font-bold text-4xl 2xl:text-5xl tracking-tight">Join the Club!</p>
                    <form className="flex flex-col gap-7 w-1/3 h-[470px] px-10 py-10 bg-white drop-shadow-lg rounded-3xl" onSubmit={submit}>
                        <div className='flex gap-4'>
                            <input 
                                className="border-2 border-nulight rounded-xl w-full h-11 px-3 text-nupurple" 
                                type="text"
                                name='fname'
                                placeholder='First Name'
                                id="select"
                                required
                            />
                            <input 
                                className="border-2 border-nulight rounded-xl w-full h-11 px-3 text-nupurple" 
                                type="text"
                                name='lname'
                                placeholder='Last Name'
                                id="select"
                                required
                            />
                        </div>
                        <input 
                            className="border-2 border-nulight rounded-xl w-full h-11 px-3 text-nupurple" 
                            type="email" 
                            name='email'
                            placeholder='Northwestern Email'
                            id="select"
                            required
                        />
                        <input 
                            className="border-2 border-nulight rounded-xl w-full h-11 px-3 text-nupurple" 
                            type="text"
                            name='netid'             
                            placeholder='NetID'
                            id="select"
                            required
                        />
                        <input
                            className="border-2 border-nulight rounded-xl w-full h-11 px-3 text-nupurple" 
                            type="text" 
                            name='major'
                            placeholder='Major'
                            id="select"
                            required
                        />
                        <select className="border-2 border-nulight rounded-xl w-full h-11 px-3 text-nupurple" name='year' id="select" required>
                            <option value="" disabled selected>Graduation Year</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="Other">Other</option>
                        </select>
                        <button className='bg-nupurple text-white rounded-xl w-1/3 h-10 self-center transition duration-200 hover:bg-nulight' type='submit'>Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}