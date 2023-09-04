import Image from 'next/image'

export default function Team() {
    return (
        <div className="w-full h-full flex flex-col items-center gap-10" id="team">
            <p className="font-sans font-bold text-5xl text-nupurple tracking-tight mt-[6rem]">Meet the Team!</p>
            <div className="flex flex-row gap-20">
                <div className="flex flex-col items-center">
                    <a href="https://www.linkedin.com/feed/" className="hover:scale-105 duration-200" target="_blank">
                        <Image src="/nuai.png" width={1000} height={1000} alt='' className='h-48 w-48 object-cover rounded-full border-4 border-gray-400'/>
                    </a>
                    <p className="font-sans font-medium text-lg tracking-tight mt-3">Isaac ("Big Papi") Miller</p>
                    <p className="font-sans font-light tracking-tight">Co-President</p>
                </div>
                <div className="flex flex-col items-center">
                    <a href="https://www.linkedin.com/feed/" className="hover:scale-105 duration-200" target="_blank">
                        <Image src="/nuai.png" width={1000} height={1000} alt='' className='h-48 w-48 object-cover rounded-full border-4 border-gray-400'/>
                    </a>
                    <p className="font-sans font-medium text-lg tracking-tight mt-3">James Kuntz</p>
                    <p className="font-sans font-light tracking-tight">Co-President</p>
                </div>
            </div>
            <div className="flex flex-row gap-20">
                <div className="flex flex-col items-center">
                    <a href="https://www.linkedin.com/feed/" className="hover:scale-105 duration-200" target="_blank">
                        <Image src="/nuai.png" width={1000} height={1000} alt='' className='h-48 w-48 object-cover rounded-full border-4 border-gray-400'/>
                    </a>
                    <p className="font-sans font-medium text-lg tracking-tight mt-3">Grace Downing</p>
                    <p className="font-sans font-light tracking-tight">Executive Member</p>
                </div>
                <div className="flex flex-col items-center">
                    <a href="https://www.linkedin.com/feed/" className="hover:scale-105 duration-200" target="_blank">
                        <Image src="/nuai.png" width={1000} height={1000} alt='' className='h-48 w-48 object-cover rounded-full border-4 border-gray-400'/>
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