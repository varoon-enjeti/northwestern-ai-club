export default function Home() {
    return (
        <div className="w-full h-full" id="home">
            <div className="h-full w-full flex justify-center overflow-hidden pl-10 lg:pl-20 items-center bg-gradient-to-b from-white via-transparent via-40% to-white">
                <div className="flex flex-col gap-3">
                    <p className='h-24 -ml-1 -mb-3 text-4xl lg:text-8xl tracking-tight font-sans font-bold animate-[loadOne_2.25s_ease] text-transparent bg-clip-text bg-gradient-to-b from-nupurple via-nupurple via-65%' id="home-title">Northwestern AI</p>
                    <p className="w-2/3 text-2xl font-sans font-normal tracking-tight animate-[loadTwo_2.25s_ease] text-nulight">Educating and Empowering Students to Shape the Future with Artificial Intelligence.</p>
                    <a href="#join" className='w-1/6 h-10 flex items-center justify-center font-sans tracking-tight animate-[loadThree_2.25s_ease] font-medium text-xl bg-nupurple rounded-lg text-white hover:scale-105 duration-200'>Sign Up</a>
                </div>
                <iframe className='-mr-36 lg:-mr-80 w-[52%] h-[135%] ml-auto rotate-[-17deg] z-40' src="https://particles-js-gamma.vercel.app"></iframe>
            </div>
        </div>
    );
}