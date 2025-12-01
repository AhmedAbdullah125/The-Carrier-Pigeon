import React from "react";
import Image from "next/image";
import membership1 from "../../public/images/membership1.png";
import membership2 from "../../public/images/membership2.png";
import birds from "../../public/images/birds.png";
import newsImg from "../../public/images/newsImg.png";
import birdsBg from "../../public/images/birdsBg.png";
import { t } from "@/lib/i18n";
import Link from "next/link";

export default function Membership({ lang }) {
    return (
        <div className="membership-section has-bg" style={{ backgroundImage: `url(${birdsBg.src})`, backgroundSize: "cover", backgroundPosition: "fixed", backgroundRepeat: "no-repeat" }}>
            <div className="white-bg">
                <div className="container">
                    <div className="membership-content">
                        <div className="r-side">
                            <h2>{t(lang, 'membership_title')}</h2>
                            <p>{t(lang, 'membership_description')}</p>
                            <div className="cards-cont">
                                <div className="card">
                                    <Image src={membership1} alt="membership1" />
                                    <div className="text">
                                        <h3>{t(lang, 'license_title')}</h3>
                                        <p>{t(lang, 'license_description')}</p>
                                        <Link href="/license-request">{t(lang, 'request_license')}</Link >
                                    </div>
                                </div>
                                <div className="card">
                                    <Image src={membership2} alt="membership2" />
                                    <div className="text">
                                        <h3>{t(lang, 'membership_card_title')}</h3>
                                        <p>{t(lang, 'membership_card_description')}</p>
                                        <button>{t(lang, 'request_membership')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-side">
                            <div className="img-cont up">
                                <div className="img-overlay-cont">
                                    <Image src={birds} alt="birds" />
                                    <div className="overlay"></div>
                                </div>
                            </div>
                            <div className="img-cont down">
                                <div className="img-overlay-cont">
                                    <Image src={newsImg} alt="newsImg" />
                                    <div className="overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}