import React from "react";
import Link from "next/link";
import { t } from "@/lib/i18n";
export default function SectionHeader({ title, description, link, lang }) {
    return (
        <div className="section-header">
            <div className="r-side">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
            <div className="l-side">
                <Link href={link} className="regular-btn"> {t(lang, 'show_all')} </Link>
            </div>
        </div>
    )
}
