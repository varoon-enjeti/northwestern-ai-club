import Image from 'next/image'

export default function About() {
    return (
        <div className="mt-20 md:mt-0 w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-3 md:gap-20 xl:gap-36" id="about">
            <div className="flex flex-col w-full md:w-3/5 lg:w-2/5 px-5 lg:px-0 lg:pt-10">
                <p className='text-nupurple font-sans font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tight'>Who We Are</p>
                <p className='text-nulight font-sans text-md lg:text-lg xl:text-xl 2xl:text-2xl leading-snug lg:leading-normal tracking-tight pt-1 pb-5'>{`We are a group of Northwestern students with a wide range of interests and backgrounds, including technical, non-technical, business, and communication expertise. We are committed to keeping doors open to anyone who shares our curiosity and passion for artificial intelligence. Whether you're a seasoned AI enthusiast or just beginning to explore this exciting field, you'll find a place among us. Northwestern AI is a community that thrives on inclusivity, where every perspective is valued, and every member has the opportunity to contribute to our shared journey of learning.`}</p>
                <p className='text-nupurple font-sans font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tight pt-0 lg:pt-5'>What We Do</p>
                <p className='text-nulight font-sans text-md lg:text-lg xl:text-xl 2xl:text-2xl leading-snug lg:leading-normal pt-1 tracking-tight'>Northwestern AI is a dynamic space where innovation thrives. We actively bridge the gap between artificial intelligence and various fields, offering students opportunities to engage with hands-on learning, collaborative discussions, and insightful guest speakers. Our mission is to equip Northwestern students, regardless of their AI background, with the expertise and resources needed to not only navigate but also contribute to the rapidly evolving AI landscape.</p>
            </div>
            <Image
                src="/nuai.png"
                alt='Northwestern AI logo'
                width={500}
                height={500}
                className='w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] lg:pt-0'
            />
        </div>
    );
}