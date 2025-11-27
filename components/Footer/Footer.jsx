"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import instagram from "@/public/images/instagram.svg";
import linkedIn from "@/public/images/linkedIn.svg";
import x from "@/public/images/x.svg";
import { t } from "@/lib/i18n";

export default function Footer() {
    const [lang, setLang] = useState("ar");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("lang");
            if (stored) setLang(stored);
        }
    }, []);

    const menu = [
        { labelKey: "footer_menu_home", href: "/" },
        { labelKey: "footer_menu_races", href: "/racing" },
        { labelKey: "footer_menu_auctions", href: "/auctions" },
        { labelKey: "footer_menu_guidelines", href: "/guidelines" },
        { labelKey: "footer_menu_reports", href: "/reports" },
        { labelKey: "footer_menu_news", href: "/news" },
        { labelKey: "footer_menu_contact", href: "/contact" },
    ];

    const importantLinks = [
        { labelKey: "national_service_gateway", href: "/" },
        { labelKey: "united_governmental_gateway", href: "/" },
        { labelKey: "national_data_and_ai_gateway", href: "/" },
        { labelKey: "national_intellectual_property_gateway", href: "/" },
        { labelKey: "national_competitive_processes_gateway", href: "/" },
        { labelKey: "national_electronic_transactions_gateway", href: "/" },
    ];

    const supportLinks = [
        { labelKey: "footer_help_center", href: "/" },
        { labelKey: "footer_contact_us", href: "/" },
        { labelKey: "footer_join_us", href: "/" },
        { labelKey: "footer_sitemap", href: "/" },
        { labelKey: "footer_report_abuse", href: "/" },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-columns">
                    <div className="footer-col">
                        <h4 className="footer-title">{t(lang, "summary")}</h4>
                        <div className="links-cont">
                            {menu.map((item, i) => (
                                <Link href={item.href} key={i}>
                                    {t(lang, item.labelKey)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">
                            {t(lang, "footer_important_links")}
                        </h4>
                        <div className="links-cont">
                            {importantLinks.map((item, i) => (
                                <Link href={item.href} key={i}>
                                    {t(lang, item.labelKey)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">
                            {t(lang, "footer_support_title")}
                        </h4>
                        <div className="links-cont">
                            {supportLinks.map((item, i) => (
                                <Link href={item.href} key={i}>
                                    {t(lang, item.labelKey)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="footer-col footer-social">
                        <h4 className="footer-title">
                            {t(lang, "footer_follow_us")}
                        </h4>
                        <div className="footer-social-icons">
                            <button aria-label="X">
                                <Image src={x} alt="X" width={18} height={18} />
                            </button>
                            <button aria-label="LinkedIn">
                                <Image src={linkedIn} alt="LinkedIn" width={18} height={18} />
                            </button>
                            <button aria-label="Instagram">
                                <Image src={instagram} alt="Instagram" width={18} height={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copy">
                        <h5>{t(lang, "footer_copyright_title")}</h5>
                        <p>{t(lang, "footer_copyright_by")}</p>
                    </div>
                    <div className="footer-logos">
                        <div className="footer-logo-box">
                            <Image src={logo} alt="شعار السعودية" width={80} height={40} />
                        </div>
                        <div className="footer-logo-box">
                            <Image src={logo} alt="شعار السعودية" width={80} height={40} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}