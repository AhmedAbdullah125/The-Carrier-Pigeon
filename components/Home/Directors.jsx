import React from "react";
import SectionHeader from "./SectioHeader";
import Director from "@/public/images/Director.png";
import Image from "next/image";
import { t } from "@/lib/i18n";

export default function Directors({lang}) {
    const directors = {
        name: t(lang, 'director_name'),
        title: t(lang, 'director_position'),
        description: t(lang, 'director_bio'),
        image: Director
    }

    return (
        <div className="directors-section">
            <div className="container">
                <SectionHeader 
                    title={t(lang, 'directors_title')} 
                    description={t(lang, 'directors_description')} 
                    link="/directors" 
                    lang={lang}
                />
                <div className="news-content">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="news-item">
                            <div className="news-item-img">
                                <h4 className="title-cont">{directors.title}</h4>
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