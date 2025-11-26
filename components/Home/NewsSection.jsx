import Link from "next/link";
import React from "react";
import Image from "next/image";          // <-- add this
import newsImg from "@/public/images/newsImg.png";
import SectionHeader from "./SectioHeader";

export default function NewsSection() {
  const news = {
    title: "بطولة الرياض السنوية",
    description:
      "أُقيمت صباح الجمعة بطولة الرياض لسباقات الحمام الزاجل بمشاركة أكثر من 300 متسابق من مختلف مناطق المملكة، وشهدت تنافسًا قويًا وأجواءً حماسية.",
    image: newsImg,
    link: "/news/1",
  };

  return (
    <div className="news-section">
      <div className="container">
        <SectionHeader title="اخر الاخبار" description="تابع أبرز الفعاليات والأنشطة والسباقات الخاصة بالجمعية السعودية" link="/news" />
        <div className="news-content">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="news-item">
              <div className="news-item-img">
                <div className="img-cont">
                  <Image
                    src={news.image}
                    alt="news"
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
                  اقرأ المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
