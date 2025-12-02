'use client'
import React, { useState } from "react";
import heroimg from "@/public/images/heroimg.png";
import { t } from "@/lib/i18n";
import AuctionCard from "../Auctions/AuctionCard";

export default function AuctionsGrid({ lang }) {
    const [active, setActive] = useState(1);
    const auctions = [
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            hint: t(lang, "auctions_hint"),
            id: 1,
            started: false
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            hint: t(lang, "auctions_hint"),
            id: 2,
            started: false
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            hint: t(lang, "auctions_hint"),
            id: 3,
            started: false
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 4,
            started: true
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 5,
            started: true
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 6,
            started: true
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 7,
            started: true
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 8,
            started: true
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 9,
            started: true
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 10,
            started: true
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 11,
            started: true
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 12,
            started: true
        },
    ];

    return (
        <div className="auctions-section">
            <div className="container">
                <div className="switch-toggle-container">
                    <button className={`switch-toggle-btn ${active === 1 ? "active" : ""}`} onClick={() => setActive(1)}><span>المزادات الحالية</span></button>
                    <button className={`switch-toggle-btn ${active === 2 ? "active" : ""}`} onClick={() => setActive(2)}><span>المزادات القادمه</span></button>
                </div>
                <div className="auctions-grid">
                    {auctions.map((auction, index) => (
                        active == 1 ?
                            auction.started ?
                                <AuctionCard key={auction.id} auction={auction} lang={lang} />
                                : null : active == 2 ?
                                !auction.started ?
                                    <AuctionCard key={auction.id} auction={auction} lang={lang} />
                                    : null : null

                    ))}
                </div>
            </div>
        </div>
    )
}