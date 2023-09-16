import Image from 'next/image'

interface Card {
    title: string;
    text: string;
    image: string;
    id: string;
}

export default function Eventcard(props:Card) {
    return (
        <div className="h-64 2xl:h-76 w-1/3 bg-gray-300 rounded-2xl flex flex-col gap-1 px-5 py-4 font-sans tracking-tight shadow-xl hover:scale-105 duration-200">
            <div className="flex items-center h-10 gap-2 text-nupurple font-bold text-3xl">
                <Image 
                    src={props.image}
                    alt='Event Image'
                    width={30}
                    height={30}
                    id={props.id}
                />
                {props.title}
            </div>
            <div className="text-nulight text-lg 2xl:text-2xl leading-snug">
                {props.text}
            </div>
        </div>
    );
}