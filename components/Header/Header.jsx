// components/Header.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import flag from "@/public/images/flag.svg";
import logo from "@/public/images/logo.svg";
import langImage from "@/public/images/lang.svg";
import userImage from '@/public/images/userIcon.svg'
import profileImage from '@/public/images/user.jpg'
import cheveron from '@/public/images/cheveron.svg'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import notificationImage from '@/public/images/bill.svg'
import bars from '@/public/images/bars.svg'
import { t } from "@/lib/i18n";
const navItems = [
    { label: "الرئيسية", href: "/", lable_en: "Home" },
    { label: "المزادات", href: "/auctions", lable_en: "Auctions" },
    { label: "البطولات", href: "/tournaments", lable_en: "Tournaments" },
    { label: "الخدمات", href: "/services", lable_en: "Services" },
    { label: "الأندية", href: "/clubs", lable_en: "Clubs" },
    { label: "الأخبار", href: "/news", lable_en: "News" },
    { label: "البرامج الزمنيه", href: "/timeline", lable_en: "Timeline" },
    { label: "تواصل معنا", href: "/contact", lable_en: "Contact" },
];
const token = true;

export default function Header() {
    const pathname = usePathname();
    const [lang, setLang] = useState('ar');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('lang')) {
                setLang(localStorage.getItem('lang'));
            }
            else {
                localStorage.setItem('lang', 'ar');
                setLang('ar');
            }
        }
    }, []);
    return (
        <header className={"header"} style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            {/* Top gov bar */}
            <div className={"topBar"}>
                <div className={"container"}>
                    <div className={"topBarInner"}>
                        <Image src={flag} alt="flag" className={"govFlag"} />
                        <span className={"govText"}>{t(lang, "website_title")}</span>
                    </div>
                </div>
            </div>
            {/* Main navigation */}
            <div className={"navBar"}>
                <div className="container">
                    <div className={"navInner"}>
                        {/* Right: logo */}
                        <Image src={logo} alt="logo" className={"logo"} />
                        {/* Center: nav links */}
                        <nav className={"navMenu"} aria-label="Main navigation">
                            {navItems.map((item, index) => {
                                const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)
                                return (
                                    <Link href={item.href} key={index} className={`navItem ${isActive ? "active" : ""}`}> {lang == "ar" ? item.label : item.lable_en} </Link>
                                );
                            })}
                        </nav>

                        {/* Left: language + login */}
                        <div className={"navActions"}>
                            <button className={"langBtn"} type="button"
                                onClick={() => {
                                    if (lang === 'ar') {
                                        localStorage.setItem('lang', 'en');
                                        setLang('en');
                                        window.location.reload();
                                    }
                                    else {
                                        localStorage.setItem('lang', 'ar');
                                        setLang('ar');
                                        window.location.reload();
                                    }
                                }}
                            >
                                <Image src={langImage} alt="lang" className={"langImage"} />
                                <span className={"langText"}>{lang === 'ar' ? 'English' : 'العربية'}</span>
                            </button>

                            {
                                !token ?
                                    <Link href="/login" className={"loginBtn"}>
                                        <Image src={userImage} alt="user" className={"loginIcon"} />
                                        <span className={"loginText"}>{t(lang, "login")}</span>
                                    </Link>
                                    :
                                    <>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className={"profileBtn"}>
                                                <Image src={profileImage} alt="user" className={"profileIcon"} />
                                                <span className="username">سعيد العتيبي</span>
                                                <Image src={cheveron} alt="cheveron" className={"cheveronIcon"} />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent dir={lang === 'ar' ? 'rtl' : 'ltr'} className="w-56 user-dropdown">
                                                <DropdownMenuLabel className="text-center">{t(lang, "welcome")}</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem>
                                                        <Link href="/login" className="w-full text-center">{t(lang, "login")}</Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Link href="/register" className="w-full text-center">{t(lang, "register")}</Link>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <div className="notification-cont">
                                            <Image src={notificationImage} alt="notification" className={"notificationIcon"} />
                                        </div>
                                    </>
                            }
                            {/* Mobile menu */}
                            <div className="mob-menue">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className={"profileBtn"}>
                                        <Image src={bars} alt="bars" className={"barsIcon"} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent dir={lang === 'ar' ? 'rtl' : 'ltr'} className="w-56 user-dropdown">
                                        <DropdownMenuGroup>
                                            {
                                                navItems.map((item, index) =>
                                                    <DropdownMenuItem key={index}>
                                                        <Link href={item.href} className="w-full text-center">{lang == "ar" ? item.label : item.lable_en}</Link>
                                                    </DropdownMenuItem>
                                                )
                                            }
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

