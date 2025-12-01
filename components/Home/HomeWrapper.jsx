"use client"
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import NewsSection from "./NewsSection";
import HomeReposts from "./HomeReposts";
import Directors from "./Directors";
import RacingSchedule from "./RacingSchedule";
import Membership from "./Membership";
import HomeAuctions from "./HomeAuctions";
import HomeCommunity from "./HomeCommunity";
import HomePartners from "./HomePartners";
import Loading from "@/src/app/loading";

export default function HomeWrapper() {
  const [lang, setLang] = useState('ar');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLang(localStorage.getItem('lang'));
    }
  }, []);
  return (
    <div className="home-page-content" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
      <Hero lang={lang} />
      <NewsSection lang={lang} />
      <HomeReposts lang={lang} />
      <Directors lang={lang} />
      <RacingSchedule lang={lang} />
      <Membership lang={lang} />
      <Loading />
      <HomeAuctions lang={lang} />
      <HomeCommunity lang={lang} />
      <HomePartners lang={lang} />
    </div>
  )
}
