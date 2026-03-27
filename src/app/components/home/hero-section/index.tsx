import Image from "next/image"
import Link from "next/link";

const HeroSection = () => {
    const socialIcon = [
        {
            img: "/images/icon/linkedin-icon.svg",
            href: "https://www.linkedin.com/in/amaanwarsi/",
            icon: "LinkedIn"
        },
        {
            img: "/images/icon/github-icon.svg",
            href: "https://github.com/amaanwarsi/",
            icon: "Github"
        },
        {
            img: "/images/icon/whatsapp-icon.svg",
            href: "https://wa.me/919997794387?text=Hi%20Amaan,%20came%20across%20your%20website%20and%20thought%20of%20reaching%20out%2E",
            icon: "Whatsapp"
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="border border-primary/10">
                    <div className="relative flex flex-col mt-32 -center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                        <div className="absolute top-0 left-1/2 xs:left-7 sm:left-8 -translate-x-1/2 xs:translate-x-0 -translate-y-1/2">
                            <Image src={"/images/hero-sec/avatar.webp"} alt="user-img" width={145} height={145} className="border-4 border-white rounded-full" />
                            <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                        </div>

                        <div className="w-full flex flex-col xs:flex-row xs:items-start xs:justify-between gap-4">
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>Amaan Warsi</h1>
                                <p className="text-blue-500 font-normal">Web & Mobile Dev</p>
                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">Moradabad, India</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-3 md:mt-0 gap-3">
                                {socialIcon?.map((value, index) => {
                                    return (
                                        <Link href={value?.href} key={index} className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full">
                                            <Image src={value?.img} alt={value?.icon} width={18} height={18} />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4 px-4 md:px-0 md:pt-4">
                            <a
                                href="https://calendly.com/itsamaan-warsi/30min"
                                className="flex-1 md:flex-none group bg-black text-white text-sm md:text-base px-5 py-3 md:px-6 md:py-3 rounded-full font-medium flex justify-center items-center gap-3 transition-all duration-200"
                            >
                                <Image
                                    src="/images/icon/gmeet-icon.svg"
                                    alt="Gmeet Logo"
                                    width={24}
                                    height={24}
                                />
                                <span>Book a free call</span>
                            </a>

                            <a
                                href="mailto:itsamaan.warsi@gmail.com"
                                className="group bg-white border border-gray-200 text-gray-900 px-4 py-3 md:px-6 md:py-3 rounded-full font-medium flex justify-center items-center gap-2 md:gap-3 transition-all duration-200"
                            >
                                <Image
                                    src="/images/icon/email-icon.svg"
                                    alt="Email icon"
                                    width={20}
                                    height={20}
                                />
                                <span className="hidden md:inline">Email Me</span>
                            </a>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection

