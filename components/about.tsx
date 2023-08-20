import Image from 'next/image'

export default function About() {
    return (
        <div className="w-full h-full flex items-center justify-center gap-48" id="about">
            <div className="flex flex-col w-1/3">
                <p className='text-nupurple font-sans font-bold text-5xl tracking-tight'>Who We Are</p>
                <p className='text-nulight font-sans text-xl tracking-tight pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                <p className='text-nupurple font-sans font-bold text-5xl tracking-tight pt-5'>What We Do</p>
                <p className='text-nulight font-sans text-xl tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
            <Image
                src="/nuai.png"
                alt='Northwestern AI logo'
                width={500}
                height={500}
            />
        </div>
    );
}