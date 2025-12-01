import React from "react";
import { t } from "@/lib/i18n";

export default function ContactHero({ lang,title }) {
    return (
        <div className="hero contact-hero">
            <video className="video" autoPlay muted loop playsInline >
                <source src="/images/new.mp4" type="video/mp4" />
                {t(lang, 'video_not_supported')}
            </video>

            <div className="overlay">
                <div className="container">
                    <div className="license-hero-cont">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}