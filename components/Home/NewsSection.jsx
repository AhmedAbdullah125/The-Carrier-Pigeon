import Link from "next/link";
import React from "react";
import Image from "next/image";
import newsImg from "@/public/images/newsImg.png";
import SectionHeader from "./SectioHeader";
import { t } from "@/lib/i18n";

export default function NewsSection({ lang }) {
  const news = {
    title: t(lang, 'news_title'),
    description: t(lang, 'news_content'),
    image: newsImg,
    link: "/news/1",
  };

  return (
    <div className="news-section">
      <div className="container">
        <SectionHeader 
          title={t(lang, 'latest_news')} 
          description={t(lang, 'news_description')} 
          link="/news" 
          lang={lang} 
        />
        <div className="news-content">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="news-item">
              <div className="news-item-img">
                <div className="img-cont">
                  <Image
                    src={news.image}
                    alt={t(lang, 'latest_news')}
                    width={1000}
                    height={600}
                    className="news-img"
                  />
                  <div className="overlay"></div>
                </div>
              </div>
              <div className="news-item-content">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <Link href={news.link} className="regular-btn read-more-btn">
                  {t(lang, 'read_more')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}