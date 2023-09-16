import Eventcard from "./eventcard";

export default function Events() {
    return (
        <div className="h-full w-full flex items-center justify-center flex-col gap-10" id="events">
            <div className="text-nupurple font-sans font-bold text-5xl 2xl:text-6xl 2xl:-mt-36 tracking-tight">Events</div>
            <div className="flex items-center justify-center gap-10 2xl:mt-20">
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
            <div className="flex items-center justify-center gap-10">
                <Eventcard
                    title={"Competitions"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"}
                    image={"/competitions.svg"}
                    id={"competitions"}
                />
                <Eventcard
                    title={"Hackathons"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"}
                    image={"/code.svg"}
                    id={"code"}
                />
            </div>
        </div>
    );
}