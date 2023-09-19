'use client'
import Link from "next/link";
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const breakpoint = 514;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 64) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    const width = useWindowSize();

    if  (width == 0) {
        <header className="w-full h-12 fixed bg-gray-300"></header>
    } else if (width > breakpoint) {
        return (
        <header className="lg:h-16 w-full fixed flex flex-row text-center bg-gray-300 z-30" id="header">
                {scrolled ? 
                (<div className="flex flex-row text-center gap-[15vw] md:gap-[30vw] lg:gap-[35vw] xl:gap-[50vw] 2xl:gap-[65vw]">
                    <div className='flex flex-row gap-3 md:gap-5 lg:gap-10 text-center items-center'>
                        <Link href="/" className='mr-0 md:mr-3 lg:mr-10'>
                            <Image src="/nuai.png" width={1000} height={1000} alt='' className='h-16 w-16'/>
                        </Link>
                        <Link href="#about" className='font-sans text-nupurple text-lg hover:text-nulight'>About</Link>
                        <Link href="#events" className='font-sans text-nupurple text-lg hover:text-nulight'>Events</Link>
                        <Link href="#team" className='font-sans text-nupurple text-lg hover:text-nulight'>Team</Link>
                        <Link href="#join" className='font-sans text-white text-lg bg-nupurple md:w-24 w-20 h-8 flex items-center justify-center animate-[loadOne_1.25s_ease] rounded-lg hover:scale-105 duration-200'>Sign Up</Link>
                    </div>
                    <div className='flex flex-row items-center gap-6'>
                        <Link href="https://www.instagram.com/northwestern_ai/" target="_blank" className='animate-[loadOne_1.25s_ease]'>
                            <Image src="/instagram.svg" width={1000} height={1000} alt='' className='h-6 w-6 filter hover:contrast-50 transition duration-200'/>
                        </Link>
                        <Link href="https://www.linkedin.com/groups/14288307/" target="_blank" className='animate-[loadOne_1.25s_ease]'>
                            <Image src="/linkedin.svg" width={1000} height={1000} alt='' className='h-6 w-6 hover:contrast-50 transition duration-200'/>
                        </Link>
                        <Link href="mailto:northwesternaiclub@gmail.com?subject=I'm Interested in AI Club!" target="_blank" className='animate-[loadOne_1.25s_ease]'>
                            <Image src="/mail.svg" width={1000} height={1000} alt='' className='h-7 w-7 hover:contrast-50 transition duration-200'/>
                        </Link>
                    </div>  
                </div>)
                :
                (<div className="flex flex-row text-center gap-5 lg:gap-64 xl:gap-96 2xl:gap-[30vw]">
                    <div className='flex flex-row gap-5 lg:gap-10 text-center items-center'>
                        <Link href="/" className='mr-0 md:mr-3 lg:mr-10'>
                            <Image src="/nuai.png" width={1000} height={1000} alt='' className='h-16 w-16'/>
                        </Link>
                        <Link href="#about" className='font-sans text-nupurple text-lg hover:text-nulight'>About</Link>
                        <Link href="#events" className='font-sans text-nupurple text-lg hover:text-nulight'>Events</Link>
                        <Link href="#team" className='font-sans text-nupurple text-lg hover:text-nulight'>Team</Link>
                    </div>
                    <div className='flex flex-row items-center gap-6'>
                        <Link href="https://www.instagram.com/northwestern_ai/" target="_blank" key={1} className='animate-[loadOne_1.25s_ease]'>
                            <Image src="/instagram.svg" width={1000} height={1000} alt='' className='h-6 w-6 hover:contrast-50 transition duration-200'/>
                        </Link>
                        <Link href="https://www.linkedin.com/groups/14288307/" target="_blank" key={2} className='animate-[loadOne_1.25s_ease]'>
                            <Image src="/linkedin.svg" width={1000} height={1000} alt='' className='h-6 w-6 hover:contrast-50 transition duration-200'/>
                        </Link>
                        <Link href="mailto:northwesternaiclub@gmail.com?subject=I'm Interested in AI Club!" target="_blank" key={3} className='animate-[loadOne_1.25s_ease]'>
                            <Image src="/mail.svg" width={1000} height={1000} alt='' className='h-7 w-7 hover:contrast-50 transition duration-200'/>
                        </Link>
                    </div>
                </div>)}
        </header>
        );
    } else {
        return (
            <header className="h-12 w-full fixed flex flex-row text-center bg-gray-300 z-30 gap-5">
                <Link href="/" className='mr-10'>
                    <Image src="/nuai.png" width={1000} height={1000} alt='' className='h-12 w-12'/>
                </Link>
                {/* <Link href="#about" className='mr-10'>
                    <p className="">a</p>
                </Link>
                <Link href="#events" className='mr-10'>
                    <p className="">e</p>
                </Link>
                <Link href="#team" className='mr-10'>
                    <p className="">t</p>
                </Link>
                <Link href="#join" className='mr-10'>
                    <p className="">j</p>
                </Link> */}
            </header>
        );
    }
}

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth);
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}