// components/Home/HomeCommunity.jsx
import React from "react";
import SectionHeader from "./SectioHeader";
import { t } from "@/lib/i18n";
import Image from "next/image";

// 8 images
import img1 from "@/public/images/birds/1.png";
import img2 from "@/public/images/birds/2.png";
import img3 from "@/public/images/birds/3.png";
import img4 from "@/public/images/birds/4.png";
import img5 from "@/public/images/birds/5.png";
import img6 from "@/public/images/birds/6.png";
import img7 from "@/public/images/birds/7.png";
import img8 from "@/public/images/birds/8.png";

const clubs = [
    { name: "نادي مكة لسباقات الحمام", name_en: "Makka Swimming Club", image: img1 },
    { name: "نادي جدة الزاجل", name_en: "Jeddah Swimming Club", image: img2 },
    { name: "نادي الزاجل السعودي", name_en: "Saudi Swimming Club", image: img3 },
    { name: "نادي الرياض لسباقات الحمام", name_en: "Riyadh Swimming Club", image: img4 },
    { name: "نادي القصيم لسباقات الزاجل", name_en: "Qassim Swimming Club", image: img5 },
    { name: "نادي المدينة للحمام الرياضي", name_en: "Madinah Swimming Club", image: img6 },
    { name: "نادي الدمام لسباقات الحوية", name_en: "Dammam Swimming Club", image: img7 },
    { name: "نادي الطائف للحمام الزاجل", name_en: "Taif Swimming Club", image: img8 },
];

export default function HomeCommunity({ lang }) {
    return (
        <div className="home-community">
            <div className="container">
                <SectionHeader
                    title={t(lang, "community_title")}
                    description={t(lang, "community_description")}
                    link="/community"
                    lang={lang}
                />
                <div className="community-content">
                    {clubs.map((club, idx) => (
                        <div key={idx} className="community-card">
                            <div className="community-card-img">
                                <Image src={club.image} alt={club.name} fill />
                            </div>
                            <p className="community-card-name">{lang == "ar" ? club.name : club.name_en}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}