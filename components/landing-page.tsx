import Image from 'next/image'

export default function LandingPage() {
    return (
        <div className="flex justify-center overflow-hidden pl-20 items-center w-full h-full bg-[url('/texture.svg')]">
            <div className="flex flex-col gap-3">
                <p className='h-24 -ml-1 -mb-3 text-8xl tracking-tighter font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-nupurple via-nupurple via-65%'>Northwestern AI</p>
                <p className="w-2/3 text-2xl tracking-tighter font-sans font-medium text-nulight">Educating and Empowering Students to Shape the Future with Artificial Intelligence.</p>
                <a href="#" className='w-1/6 h-10 flex items-center justify-center font-sans tracking-tighter font-medium text-xl bg-nupurple rounded-lg text-white hover:scale-105 duration-200'>Sign Up</a>
            </div>
            <iframe className='-mr-80 w-[52%] h-[135%] ml-auto rotate-[-17deg]' src="https://particles-js-gamma.vercel.app"></iframe>
        </div>
    );
}