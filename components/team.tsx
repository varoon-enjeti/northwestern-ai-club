'use client'
import Image from 'next/image'
import { useWindowSize } from '@/app/header';

export default function Team() {
    const width = useWindowSize();
    const breakpoint = 514;

    if (width < breakpoint) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center gap-5" id="team">
                <p className="font-sans font-bold text-3xl text-nupurple tracking-tight mt-12">Meet the Team!</p>
                    <div className="flex flex-col items-center">
                        <a href="https://www.linkedin.com/in/miller-isaac/" className="hover:scale-105 duration-200" target="_blank">
                            <Image src="/isaac.jpeg" width={1000} height={1000} alt='' className='h-36 w-36 object-cover rounded-full border-2 border-gray-400'/>
                        </a>
                        <p className="font-sans font-medium text-md tracking-tight mt-1">Isaac Miller</p>
                        <p className="font-sans font-light text-md tracking-tight">President</p>
                    </div>
                    <div className="w-full h-56 flex items-center justify-center gap-10 -mt-5">
                        <div className="flex flex-col items-center">
                            <a href="https://www.linkedin.com/in/jameskuntz/" className="hover:scale-105 duration-200" target="_blank">
                                <Image src="/james.jpeg" width={1000} height={1000} alt='' className='h-36 w-36 object-cover rounded-full border-2 border-gray-400'/>
                            </a>
                            <p className="font-sans font-medium text-md tracking-tight mt-1">James Kuntz</p>
                            <p className="font-sans font-light tracking-tight">Vice President</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="https://www.linkedin.com/in/gracedowning2024/" className="hover:scale-105 duration-200" target="_blank">
                                <Image src="/grace.jpeg" width={1000} height={1000} alt='' className='h-36 w-36 object-cover rounded-full border-2 border-gray-400'/>
                            </a>
                            <p className="font-sans font-medium text-md tracking-tight mt-1">Grace Downing</p>
                            <p className="font-sans font-light tracking-tight">Executive Member</p>
                        </div>
                    </div>
                    <div className="w-full h-56 flex items-center justify-center gap-10 -mt-5">
                        <div className="flex flex-col items-center">
                            <a href="https://www.linkedin.com/in/helena-guajardo-298880226/" className="hover:scale-105 duration-200" target="_blank">
                                <Image src="/helena.jpeg" width={1000} height={1000} alt='' className='h-36 w-36 object-cover rounded-full border-2 border-gray-400'/>
                            </a>
                            <p className="font-sans font-medium text-md tracking-tight mt-1">Helena Guajardo</p>
                            <p className="font-sans font-light tracking-tight">Executive Member</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="https://www.linkedin.com/in/varoonenjeti/" className="hover:scale-105 duration-200" target="_blank">
                                <Image src="/varoon.png" width={1000} height={1000} alt='' className='h-36 w-36 object-cover rounded-full border-2 border-gray-400'/>
                            </a>
                            <p className="font-sans font-medium text-md tracking-tight mt-1">Varoon Enjeti</p>
                            <p className="font-sans font-light tracking-tight">Executive Member</p>
                        </div>
                    </div>
            </div>
        )
    } else {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center gap-10" id="team">
                <p className="font-sans font-bold text-3xl lg:text-5xl text-nupurple tracking-tight mt-12">Meet the Team!</p>
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col items-center">
                        <a href="https://www.linkedin.com/in/miller-isaac/" className="hover:scale-105 duration-200" target="_blank">
                            <Image src="/isaac.jpeg" width={1000} height={1000} alt='' className='h-48 w-48 object-cover rounded-full border-4 border-gray-400'/>
                        </a>
                        <p className="font-sans font-medium text-lg tracking-tight mt-3">Isaac Miller</p>
                        <p className="font-sans font-light tracking-tight">President</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://www.linkedin.com/in/jameskuntz/" className="hover:scale-105 duration-200" target="_blank">
                            <Image src="/james.jpeg" width={1000} height={1000} alt='' className='h-48 w-48 object-cover rounded-full border-4 border-gray-400'/>
                        </a>
                        <p className="font-sans font-medium text-lg tracking-tight mt-3">James Kuntz</p>
                        <p className="font-sans font-light tracking-tight">Vice President</p>
                    </div>
                </div>
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col items-center">
                        <a href="https://www.linkedin.com/in/gracedowning2024/" className="hover:scale-105 duration-200" target="_blank">
                            <Image src="/grace.jpeg" width={1000} height={1000} alt='' className='h-48 w-48 object-cover rounded-full border-4 border-gray-400'/>
                        </a>
                        <p className="font-sans font-medium text-lg tracking-tight mt-3">Grace Downing</p>
                        <p className="font-sans font-light tracking-tight">Executive Member</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://www.linkedin.com/in/helena-guajardo-298880226/" className="hover:scale-105 duration-200" target="_blank">
                            <Image src="/helena.jpeg" width={1000} height={1000} alt='' className='h-48 w-48 object-cover rounded-full border-4 border-gray-400'/>
                        </a>
                        <p className="font-sans font-medium text-lg tracking-tight mt-3">Helena Guajardo</p>
                        <p className="font-sans font-light tracking-tight">Executive Member</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://www.linkedin.com/in/varoonenjeti/" className="hover:scale-105 duration-200" target="_blank">
                            <Image src="/varoon.png" width={1000} height={1000} alt='' className='h-48 w-48 object-cover rounded-full border-4 border-gray-400'/>
                        </a>
                        <p className="font-sans font-medium text-lg tracking-tight mt-3">Varoon Enjeti</p>
                        <p className="font-sans font-light tracking-tight">Executive Member</p>
                    </div>
                </div>
            </div>
        )
    }
}