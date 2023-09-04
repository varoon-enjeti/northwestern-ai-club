export default function LandingPage() {
    return (
        <div className="w-full h-full bg-[url('/texture.svg')]" id="landingpage">
            <div className="h-full w-full flex justify-center overflow-hidden pl-20 items-center bg-gradient-to-b from-white via-transparent via-40% to-white">
                <div className="flex flex-col gap-3">
                    <p className='h-24 -ml-1 -mb-3 text-8xl tracking-tight font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-nupurple via-nupurple via-65%'>Northwestern AI</p>
                    <p className="w-2/3 text-2xl font-sans font-normal tracking-tight text-nulight">Educating and Empowering Students to Shape the Future with Artificial Intelligence.</p>
                    <a href="#join" className='w-1/6 h-10 flex items-center justify-center font-sans tracking-tight font-medium text-xl bg-nupurple rounded-lg text-white hover:scale-105 duration-200'>Sign Up</a>
                </div>
                <iframe className='-mr-80 w-[52%] h-[135%] ml-auto rotate-[-17deg]' src="https://particles-js-gamma.vercel.app"></iframe>
            </div>
        </div>
    );
}