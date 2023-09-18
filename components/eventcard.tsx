import Image from 'next/image'

interface Card {
    title: string;
    text: string;
    image: string;
    id: string;
}

export default function Eventcard(props:Card) {
    return (
        <div className="h-[164px] lg:h-64 2xl:h-76 w-10/12 lg:w-1/3 bg-gray-300 rounded-2xl flex flex-col lg:gap-1 px-3 py-2 lg:px-5 lg:py-4 font-sans tracking-tight shadow-xl hover:scale-105 duration-200">
            <div className="flex items-center h-10 gap-1 lg:gap-2 text-nupurple font-bold text-xl lg:text-3xl">
                <Image 
                    src={props.image}
                    alt='Event Image'
                    width={30}
                    height={30}
                    id={props.id}
                    className='w-[17px] lg:w-[30px]'
                />
                {props.title}
            </div>
            <div className="text-nulight text-sm leading-tight lg:leading-normal lg:text-lg 2xl:text-2xl">
                {props.text}
            </div>
        </div>
    );
}