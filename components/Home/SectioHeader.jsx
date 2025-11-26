import React from "react";
import Link from "next/link";
export default function SectionHeader({ title, description, link }) {
    return (
        <div className="section-header">
            <div className="r-side">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
            <div className="l-side">
                <Link href={link} className="regular-btn">
                    عرض الكل
                </Link>
            </div>
        </div>
    )
}
