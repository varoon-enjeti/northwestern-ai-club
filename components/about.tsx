import Image from 'next/image'

export default function About() {
    return (
        <div className="w-full h-full flex items-center justify-center gap-36" id="about">
            <div className="flex flex-col w-2/5 pt-10">
                <p className='text-nupurple font-sans font-bold text-5xl 2xl:text-6xl tracking-tight'>Who We Are</p>
                <p className='text-nulight font-sans text-xl 2xl:text-2xl tracking-tight pt-1 pb-5'>{'We are a group of Northwestern students with a wide range of interests and backgrounds, including technical, non-technical, business, and communication expertise. We are committed to keeping doors open to anyone who shares our curiosity and passion for artificial intelligence. Whether you&apos;re a seasoned AI enthusiast or just beginning to explore this exciting field, you&apos;ll find a place among us. Northwestern AI is a community that thrives on inclusivity, where every perspective is valued, and every member has the opportunity to contribute to our shared journey of learning.'}</p>
                <p className='text-nupurple font-sans font-bold text-5xl 2xl:text-6xl tracking-tight pt-5'>What We Do</p>
                <p className='text-nulight font-sans text-xl 2xl:text-2xl pt-1 tracking-tight'>Northwestern AI is a dynamic space where innovation thrives. We actively bridge the gap between artificial intelligence and various fields, offering students opportunities to engage with hands-on learning, collaborative discussions, and insightful guest speakers. Our mission is to equip Northwestern students, regardless of their AI background, with the expertise and resources needed to not only navigate but also contribute to the rapidly evolving AI landscape.</p>
            </div>
            <Image
                src="/nuai.png"
                alt='Northwestern AI logo'
                width={500}
                height={500}
                className='2xl:w-[600px]'
            />
        </div>
    );
}