import React from "react";
import SectionHeader from "./SectioHeader";
import Director from "@/public/images/Director.png";
import Image from "next/image";

export default function Directors() {
    const directors = {
        name: "د. خالد العتيبي",
        title: "رئيس مجلس الإدارة",
        description: "بخبرة تتجاوز ١٥ عامًا في إدارة الأندية الرياضية وتطوير المشاريع.",
        image: Director
    }

    return (
        <div className="directors-section">
            <div className="container">
                <SectionHeader title="مجلس الاداره" description="فريق القيادة الذي يشرف على المنصة ويقود استراتيجيات تطوير رياضة سباقات الحمام الزاجل" link="/directors" />
                <div className="news-content">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="news-item">
                            <div className="news-item-img">
                                <h4 className="title-cont"> {directors.title} </h4>
                                <div className="img-cont director-img-cont">
                                    <Image
                                        src={directors.image}
                                        alt="news"
                                        width={1000}
                                        height={600}
                                        className="news-img"
                                    />
                                    <div className="overlay"></div>
                                </div>
                            </div>
                            <div className="news-item-content">
                                <h3>{directors.name}</h3>
                                <p>{directors.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
