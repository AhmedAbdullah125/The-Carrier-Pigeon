"use client"
import React, { useEffect, useState } from "react";
import ContactHero from "../Contact/ContactHero";
import { t } from "@/lib/i18n";
import AuctionDetails from "./AuctionDetails";
import AuctionBirdDitails from "./AuctionBirdDitails";
import RelatedAuctions from "./RelatedAuctions";

export default function AuctionWrapper({id}) {
  const [lang, setLang] = useState('ar');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLang(localStorage.getItem('lang'));
    }
  }, []);
  return (
    <div className="home-page-content" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
      <ContactHero lang={lang} title={t(lang, "auctions_title")} subtitle={t(lang, "auctions_subtitle")} />
      <AuctionDetails lang={lang} />
      <AuctionBirdDitails lang={lang} />
      <RelatedAuctions lang={lang} />
    </div>
  )
}
