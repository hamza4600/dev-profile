import Image from "next/image";
import Link from "next/link";

type StatisticProps = {
    value: number;
    label: string;
};

const Statistic = ({ value, label }: StatisticProps) => (
    <li>
        <h3 className="text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]">
            <span className="start-number" data-countup-number={value}>
                {value}
            </span>
            %
        </h3>
        <span className="block text-lg font-normal text-white lg:text-[21px]">
            {label}
        </span>
    </li>
);

const VideoPlayButton = () => (
    <Link
        data-fslightbox="gallery"
        rel="noopener noreferrer"
        href="https://www.youtube.com/watch?v=XKsaIgLp45Y"
        className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
    >
        <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-colorOrangyRed hover:text-white">
            Play
            <div className="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-gray-600 opacity-30" />
        </div>
    </Link>
);

const VideoSection = () => {
    const statistics = [
        { value: 92, label: "Customer service inquiries" },
        { value: 75, label: "Using financial institutions" },
    ];

    return (
        <section id="video-section" className="mb-10">
            <div className="mx-auto max-w-[1500px] px-5">
                <div className="jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">
                    {/* Video Preview */}
                    <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
                        <Image
                            src="/funfact-image.webp"
                            alt="AI Platform Preview"
                            width={721}
                            height={884}
                            className="h-90 w-full object-cover object-center lg:h-[35rem] xl:h-full"
                        />
                        <VideoPlayButton />
                    </div>

                    {/* Content */}
                    <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28">
                        <div className="mb-8 lg:mb-16 xl:mb-6">
                            <h2 className="text-white">AI-powered that streamline tasks</h2>
                        </div>

                        <div className="text-left text-lg leading-[1.4] text-white lg:text-[21px]">
                            <p className="mb-7">
                                As your business grows or your AI SaaS needs change, you can
                                easily adjust your subscription level to match those needs.
                                This flexibility ensures that AI remains an asset.
                            </p>
                        </div>

                        <div className="my-14 h-[1px] w-full bg-colorCodGray" />

                        <ul className="flex flex-col justify-center gap-x-11 gap-y-8 text-center sm:flex-row md:text-left xl:justify-normal xl:text-left xxl:gap-x-20">
                            {statistics.map((stat) => (
                                <Statistic key={stat.label} {...stat} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;