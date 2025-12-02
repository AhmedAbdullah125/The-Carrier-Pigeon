import React from "react";
import Image from "next/image";
import heroimg from "@/public/images/heroimg.png";
import { t } from "@/lib/i18n";
import Link from "next/link";
import FancyboxWrapper from "../ui/FancyboxWrapper";

export default function Hero({ lang }) {
    return (
        <div className="hero">
            <video className="video" autoPlay muted loop playsInline >
                <source src="/images/new.mp4" type="video/mp4" />
                {t(lang, 'video_not_supported')}
            </video>

            <div className="overlay">
                <div className="container">
                    <div className="overlay-cont">
                        <div className="r-side">
                            <h1>{t(lang, 'hero_title')}</h1>
                            <p>{t(lang, 'hero_description')}</p>
                            <div className="btns-cont">
                                <Link href="/services" className="main-btn">{t(lang, 'explore_services')}</Link>
                                <button className="sec-btn">{t(lang, 'browse_auctions')}</button>
                            </div>
                        </div>
                        <div className="l-side">
                            <FancyboxWrapper>
                                <a
                                    data-fancybox="blog"
                                    href={heroimg.src}   // large image for popup
                                    className="single-img"
                                >
                                    <Image src={heroimg} alt="vid" className="img-fluid" />
                                </a>
                            </FancyboxWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}