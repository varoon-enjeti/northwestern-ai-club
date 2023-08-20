import Link from 'next/link'

export default function Header() {
    return (
       <header className="h-16 w-2/3 fixed flex flex-row text-center gap-96">
            <div className='flex flex-row gap-10 text-center items-center'>
                <Link href="landing-page/page" className='mr-10'>
                    <img src="nuai.png" className='h-16 w-16'/>
                </Link>
                <Link href="./about" className='font-sans text-nupurple text-lg hover:text-nulight'>About</Link>
                <Link href="/" className='font-sans text-nupurple text-lg hover:text-nulight'>Events</Link>
                <Link href="/" className='font-sans text-nupurple text-lg hover:text-nulight'>Team</Link>
            </div>
            <div className='flex flex-row items-center'>
                <Link href="https://www.instagram.com/northwestern_ai/" target="_blank" className='mr-10'>
                    <img src="instagram.svg" className='h-6 w-6'/>
                </Link>
                <Link href="https://www.linkedin.com/groups/14288307/" target="_blank" className='mr-10'>
                    <img src="linkedin.svg" className='h-6 w-6'/>
                </Link>
            </div>
       </header>
    );
}