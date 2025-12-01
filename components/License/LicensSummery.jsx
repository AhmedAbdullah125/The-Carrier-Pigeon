"use client"
import React, { useEffect, useState } from "react";
import { t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import serviceIcon from "@/public/images/license/profileIcon.svg";
import rialIcon from "@/public/images/SAR.svg";
export default function LicensSummery({ lang, formData, setStep, setProgress, setMaxProgress }) {
    const [loading, setLoading] = useState(false);

    // Set progress to 1/1 when component mounts
    useEffect(() => {
        setProgress(1);
        setMaxProgress(1);
    }, [setProgress, setMaxProgress]);

    // Cost calculation
    const licenseFee = 25500;
    const vatRate = 0.15; // 15% VAT
    const vatAmount = licenseFee * vatRate;
    const totalAmount = licenseFee + vatAmount;

    const handleSubmit = () => {
        setLoading(true);
        console.log("Submitting license request:", formData);

        setTimeout(() => {
            setLoading(false);
            // Handle successful submission
            alert(t(lang, "request_submitted_successfully") || "Request submitted successfully!");
        }, 2000);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat(lang === 'ar' ? 'ar-SA' : 'en-US').format(amount);
    };

    return (
        <div className="license-summery-container">
            <div className="container">
                <div className="license-summery">
                    <h2 className="summery-title">{t(lang, "cost_details")}</h2>
                    <div className="summery-content">
                        {/* Service Account Section */}
                        <div className="summery-section">
                            <div className="section-header-summery">
                                <div className="section-icon">
                                    <Image src={serviceIcon} alt="Service Icon" />
                                </div>
                                <h3 className="section-title-summery">{t(lang, "service_account")}</h3>
                            </div>

                            <div className="cost-breakdown">
                                {/* License Fee */}
                                <div className="cost-item">
                                    <span className="cost-label">{t(lang, "license_fee")}</span>
                                    <span className="cost-value">
                                        {formatCurrency(licenseFee)} <Image src={rialIcon} alt="SAR" />
                                    </span>
                                </div>

                                {/* VAT */}
                                <div className="cost-item">
                                    <span className="cost-label">{t(lang, "vat")}</span>
                                    <span className="cost-value">
                                        {formatCurrency(vatAmount)} <Image src={rialIcon} alt="SAR" />
                                    </span>
                                </div>

                                {/* Total */}
                                <div className="cost-item total-item">
                                    <span className="cost-label-total">{t(lang, "total")}</span>
                                    <span className="cost-value-total">
                                        {formatCurrency(totalAmount)} <Image src={rialIcon} alt="SAR" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="summery-actions">
                            <Button
                                type="button"
                                onClick={() => setStep(2)}
                                className="previous-license-btn"
                            >
                                {t(lang, "previous")}
                            </Button>
                            <Button
                                type="button"
                                onClick={handleSubmit}
                                className="submit-license-btn"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loader-btn"></span>
                                ) : (
                                    <span>{t(lang, "submit_request")}</span>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}