import Link from "next/link";
import Image from 'next/image'

export default function Header() {
    return (
       <header className="h-16 w-full fixed flex flex-row text-center gap-96 bg-gray-300">
            <div className='flex flex-row gap-10 text-center items-center'>
                <Link href="#landingpage" className='mr-10'>
                    <Image src="/nuai.png" width={1000} height={1000} alt='' className='h-16 w-16'/>
                </Link>
                <Link href="#about" className='font-sans text-nupurple text-lg hover:text-nulight'>About</Link>
                <Link href="#events" className='font-sans text-nupurple text-lg hover:text-nulight'>Events</Link>
                <Link href="#team" className='font-sans text-nupurple text-lg hover:text-nulight'>Team</Link>
            </div>
            <div className='flex flex-row items-center'>
                <Link href="https://www.instagram.com/northwestern_ai/" target="_blank" className='mr-10'>
                    <Image src="/instagram.svg" width={1000} height={1000} alt='' className='h-6 w-6'/>
                </Link>
                <Link href="https://www.linkedin.com/groups/14288307/" target="_blank" className='mr-10'>
                    <Image src="/linkedin.svg" width={1000} height={1000} alt='' className='h-6 w-6'/>
                </Link>
            </div>
       </header>
    );
}