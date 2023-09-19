import Eventcard from "./eventcard";

export default function Events() {
    return (
        <div className="mt-20 lg:mt-0 h-screen w-full flex items-center justify-center flex-col gap-3 lg:gap-10 pt-10" id="events">
            <div className="text-nupurple font-sans font-bold text-3xl lg:text-5xl 2xl:text-6xl 2xl:-mt-36 tracking-tight mt-100">Events</div>
            <div className="flex items-center flex-col lg:flex-row justify-center gap-5 lg:gap-10 2xl:mt-20">
                <Eventcard
                    title={"Discussions"}
                    text={"We dive deep into AI's transformative impact on various industries and its societal implications. Join us for thought-provoking dialogues led by experts, faculty, and fellow members to explore the ever-evolving landscape of artificial intelligence. It's where curiosity sparks, ideas flourish, and knowledge grows."}
                    image={"/discuss.svg"}
                    id={"discuss"}
                />
                <Eventcard
                    title={"Guest Speakers"}
                    text={"We host industry leading experts, researchers, and innovators who will share their insights, experiences, and cutting-edge discoveries in AI. These events offer unique opportunities for networking, learning, and gaining valuable perspectives from influential figures in the AI community."}
                    image={"/speakers.svg"}
                    id={"speakers"}
                />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10">
                <Eventcard
                    title={"Competitions"}
                    text={"Join us for some friendly AI-themed competitions. These events are designed to be fun and educational, catering to all levels of expertise. Whether you're a beginner or an AI aficionado, our competitions provide an opportunity to engage in a bit of healthy competition and learn new skills."}
                    image={"/competitions.svg"}
                    id={"competitions"}
                />
                <Eventcard
                    title={"Hackathons"}
                    text={"AI Hackathons are time-bound events that provide the perfect platform to collaborate, code, and transform your AI ideas into reality. Whether you're a seasoned developer or a newcomer, our hackathons offer an exciting opportunity to push the boundaries of AI technology and build meaningful solutions."}
                    image={"/code.svg"}
                    id={"code"}
                />
            </div>
        </div>
    );
}