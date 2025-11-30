import React from "react";
import Image from "next/image";
import heroimg from "@/public/images/heroimg.png";
import { t } from "@/lib/i18n";

export default function LicenseHero({ lang }) {
    return (
        <div className="hero license-hero">
            <video className="video" autoPlay muted loop playsInline >
                <source src="/images/new.mp4" type="video/mp4" />
                {t(lang, 'video_not_supported')}
            </video>

            <div className="overlay">
                <div className="container">
                    <div className="license-hero-cont">
                        <h2>{t(lang, 'license_hero_title')}</h2>
                        <p>{t(lang, 'license_hero_description')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}