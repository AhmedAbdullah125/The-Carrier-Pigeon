import React from "react";
import Image from "next/image";
import heroimg from "@/public/images/heroimg.png";
import { t } from "@/lib/i18n";

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
                                <button className="main-btn">{t(lang, 'explore_services')}</button>
                                <button className="sec-btn">{t(lang, 'browse_auctions')}</button>
                            </div>
                        </div>
                        <div className="l-side">
                            <Image src={heroimg} alt="vid" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}