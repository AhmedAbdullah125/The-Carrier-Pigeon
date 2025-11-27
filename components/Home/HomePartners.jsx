// components/Home/HomeCommunity.jsx
import React from "react";
import { t } from "@/lib/i18n";
import Image from "next/image";
import { Marquee } from "../ui/marquee";

// 8 images
import img1 from "@/public/images/birds/1.png";
import img2 from "@/public/images/birds/2.png";
import img3 from "@/public/images/birds/3.png";
import img4 from "@/public/images/birds/4.png";
import img5 from "@/public/images/birds/5.png";
import img6 from "@/public/images/birds/6.png";
import img7 from "@/public/images/birds/7.png";
import img8 from "@/public/images/birds/8.png";
import { Button } from "../ui/button";

const partnersLogos = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function HomePartners({ lang }) {
  return (
    <div className="home-partners">
      <div className="container">
        <div className="section-header">
          <div className="r-side">
            <h2>{t(lang, "unions_and_partners")}</h2>
            <p>{t(lang, "unions_and_partners_description")}</p>
          </div>
        </div>

        <div className="partners-content" style={{ direction: "ltr" }}>
          <Marquee
            pauseOnHover
            className="partners-marquee [--duration:20s] [--gap:2.5rem]"
          >
            {partnersLogos.map((logo, index) => (
              <div className="partner-item" key={index}>
                <Image
                  src={logo}
                  alt={`partner-${index + 1}`}
                  width={140}
                  height={140}
                  className="partner-img"
                />
              </div>
            ))}
          </Marquee>

        </div>
      </div>
    </div>
  );
}
