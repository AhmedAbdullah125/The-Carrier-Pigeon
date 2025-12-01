"use client"
import React, { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { t } from "@/lib/i18n"
import Image from "next/image"
import nationalCardIcon from '@/public/images/license/nationalCardIcon.svg'
import uploadFile from '@/public/images/license/uploadFile.svg'
import healthy from "@/public/images/license/healthy.svg"

// File validation helper
// File validation helper
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const ACCEPTED_PDF_TYPES = ["application/pdf"];
const ACCEPTED_DOCUMENT_TYPES = [...ACCEPTED_IMAGE_TYPES, ...ACCEPTED_PDF_TYPES];
// Zod validation schema with translations
const makeFormSchema = (lang) =>
    z.object({
        nationalIdPhoto: z
            .any()
            .refine((file) => file && file.length > 0, {
                message: t(lang, "national_id_photo_required"),
            })
            .refine((file) => {
                if (!file || file.length === 0) return true;
                return file[0]?.size <= MAX_FILE_SIZE;
            }, {
                message: t(lang, "file_too_large"),
            })
            .refine((file) => {
                if (!file || file.length === 0) return true;
                return ACCEPTED_IMAGE_TYPES.includes(file[0]?.type);
            }, {
                message: t(lang, "invalid_file_type"),
            }),
        personalPhoto: z
            .any()
            .refine((file) => file && file.length > 0, {
                message: t(lang, "personal_photo_required"),
            })
            .refine((file) => {
                if (!file || file.length === 0) return true;
                return file[0]?.size <= MAX_FILE_SIZE;
            }, {
                message: t(lang, "file_too_large"),
            })
            .refine((file) => {
                if (!file || file.length === 0) return true;
                return ACCEPTED_IMAGE_TYPES.includes(file[0]?.type);
            }, {
                message: t(lang, "invalid_file_type"),
            }),
        fitnessCertificate: z
            .any()
            .optional()
            .refine((file) => {
                if (!file || file.length === 0) return true;
                return file[0]?.size <= MAX_FILE_SIZE;
            }, {
                message: t(lang, "file_too_large"),
            })
            .refine((file) => {
                if (!file || file.length === 0) return true;
                return ACCEPTED_DOCUMENT_TYPES.includes(file[0]?.type);
            }, {
                message: t(lang, "invalid_file_type"),
            }),
        clubApproval: z
            .any()
            .refine((file) => file && file.length > 0, {
                message: t(lang, "club_approval_required"),
            })
            .refine((file) => {
                if (!file || file.length === 0) return true;
                return file[0]?.size <= MAX_FILE_SIZE;
            }, {
                message: t(lang, "file_too_large"),
            })
            .refine((file) => {
                if (!file || file.length === 0) return true;
                return ACCEPTED_DOCUMENT_TYPES.includes(file[0]?.type);
            }, {
                message: t(lang, "invalid_file_type"),
            }),
    });

export default function DocumentsForm({ lang, formData, setFormData, setStep, progress, setProgress, setMaxProgress }) {
    const [loading, setLoading] = useState(false);
    const [nationalIdPreview, setNationalIdPreview] = useState(formData?.nationalIdPhoto || null);
    const [personalPhotoPreview, setPersonalPhotoPreview] = useState(formData?.personalPhoto || null);
    const [fitnessCertificatePreview, setFitnessCertificatePreview] = useState(formData?.fitnessCertificate || null);
    const [clubApprovalPreview, setClubApprovalPreview] = useState(formData?.clubApproval || null);
    const formSchema = useMemo(() => makeFormSchema(lang), [lang]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nationalIdPhoto: formData?.nationalIdPhoto || "",
            personalPhoto: formData?.personalPhoto || "",
            fitnessCertificate: formData?.fitnessCertificate || "",
            clubApproval: formData?.clubApproval || "",
        },
    });

    // Track form progress based on filled inputs
    useEffect(() => {
        const subscription = form.watch((value) => {
            let filledInputs = 0;
            const totalInputs = 3; // nationalIdPhoto, personalPhoto, clubApproval (fitnessCertificate is optional)

            if (value.nationalIdPhoto && value.nationalIdPhoto.length > 0) filledInputs++;
            if (value.personalPhoto && value.personalPhoto.length > 0) filledInputs++;
            if (value.clubApproval && value.clubApproval.length > 0) filledInputs++;

            setProgress(filledInputs);
            setMaxProgress(totalInputs);
        });

        return () => subscription.unsubscribe();
    }, [form, setProgress, setMaxProgress]);
    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);

        setTimeout(() => {
            setLoading(false);
            setFormData({ ...formData, ...data });
            setProgress(0); // Reset progress for next step
            setStep(3); // Move to next step
        }, 1000);
    };

    const handleFileChange = (e, fieldName, setPreview) => {
        const file = e.target.files?.[0];
        if (file) {
            // Check if it's a PDF
            if (file.type === 'application/pdf') {
                setPreview('pdf'); // Set a flag for PDF
            } else {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    return (
        <div className="personal-data-form">
            <div className="container">
                <div className="personal-data-form-content">
                    <div className="form-header">
                        <h2 className="form-title">{t(lang, "required_documents")}</h2>
                        <p className="form-subtitle">{t(lang, "required_documents_desc")}</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="license-form">

                            {/* National ID Photo Section */}
                            <div className="section-header">
                                <div className="section-icon">
                                    <Image src={nationalCardIcon} alt="National ID Icon" />
                                </div>
                                <h3 className="section-title">{t(lang, "national_id_photo")}</h3>
                            </div>
                            <div className="form-grid-single">
                                <FormField
                                    control={form.control}
                                    name="nationalIdPhoto"
                                    render={({ field: { onChange, value, ...field } }) => (
                                        <FormItem className="form-field">
                                            <FormControl>
                                                <div className={`file-upload-wrapper ${form.formState.errors.nationalIdPhoto ? 'error-input' : value && value.length > 0 ? 'success-input' : ''}`}>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        id="nationalIdPhoto"
                                                        className="file-input-hidden"
                                                        onChange={(e) => {
                                                            onChange(e.target.files);
                                                            handleFileChange(e, 'nationalIdPhoto', setNationalIdPreview);
                                                        }}
                                                        {...field}
                                                    />
                                                    <label htmlFor="nationalIdPhoto" className="file-upload-label">
                                                        <div className="upload-content">
                                                            <Image src={uploadFile} alt="Upload" className="upload-icon" />
                                                            <p className="upload-text">
                                                                {t(lang, "national_id_desc")}
                                                            </p>
                                                            <p className="upload-or">{t(lang, "or")}</p>
                                                            <button type="button" className="browse-btn">
                                                                {t(lang, "browse_files")}
                                                            </button>
                                                        </div>
                                                        {nationalIdPreview && (
                                                            <div className="file-preview">
                                                                <img src={nationalIdPreview} alt="Preview" className="preview-image" />
                                                            </div>
                                                        )}
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="field-error" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Personal Photo Section */}
                            <div className="section-header">
                                <div className="section-icon">
                                    <Image src={nationalCardIcon} alt="Profile Icon" />
                                </div>
                                <h3 className="section-title">{t(lang, "personal_photo")}</h3>
                            </div>
                            <div className="form-grid-single">
                                <FormField
                                    control={form.control}
                                    name="personalPhoto"
                                    render={({ field: { onChange, value, ...field } }) => (
                                        <FormItem className="form-field">
                                            <FormControl>
                                                <div className={`file-upload-wrapper ${form.formState.errors.personalPhoto ? 'error-input' : value && value.length > 0 ? 'success-input' : ''}`}>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        id="personalPhoto"
                                                        className="file-input-hidden"
                                                        onChange={(e) => {
                                                            onChange(e.target.files);
                                                            handleFileChange(e, 'personalPhoto', setPersonalPhotoPreview);
                                                        }}
                                                        {...field}
                                                    />
                                                    <label htmlFor="personalPhoto" className="file-upload-label">
                                                        <div className="upload-content">
                                                            <Image src={uploadFile} alt="Upload" className="upload-icon" />
                                                            <p className="upload-text">
                                                                {t(lang, "personal_photo_desc")}
                                                            </p>
                                                            <p className="upload-or">{t(lang, "or")}</p>
                                                            <button type="button" className="browse-btn">
                                                                {t(lang, "browse_files")}
                                                            </button>
                                                        </div>
                                                        {personalPhotoPreview && (
                                                            <div className="file-preview">
                                                                <img src={personalPhotoPreview} alt="Preview" className="preview-image" />
                                                            </div>
                                                        )}
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="field-error" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* Fitness Certificate Section - Optional */}
                            <div className="section-header">
                                <div className="section-icon">
                                    <Image src={healthy} alt="Document Icon" />
                                </div>
                                <h3 className="section-title">{t(lang, "fitness_certificate")}</h3>
                            </div>
                            <div className="form-grid-single">
                                <FormField
                                    control={form.control}
                                    name="fitnessCertificate"
                                    render={({ field: { onChange, value, ...field } }) => (
                                        <FormItem className="form-field">
                                            <FormControl>
                                                <div className={`file-upload-wrapper ${form.formState.errors.fitnessCertificate ? 'error-input' : value && value.length > 0 ? 'success-input' : ''}`}>
                                                    <input
                                                        type="file"
                                                        accept=".pdf,image/*"
                                                        id="fitnessCertificate"
                                                        className="file-input-hidden"
                                                        onChange={(e) => {
                                                            onChange(e.target.files);
                                                            handleFileChange(e, 'fitnessCertificate', setFitnessCertificatePreview);
                                                        }}
                                                        {...field}
                                                    />
                                                    <label htmlFor="fitnessCertificate" className="file-upload-label">
                                                        <div className="upload-content">
                                                            <Image src={uploadFile} alt="Upload" className="upload-icon" />
                                                            <p className="upload-text">
                                                                {t(lang, "fitness_certificate_desc")}
                                                            </p>
                                                            <p className="upload-or">{t(lang, "or")}</p>
                                                            <button type="button" className="browse-btn">
                                                                {t(lang, "browse_files")}
                                                            </button>
                                                        </div>
                                                        {fitnessCertificatePreview && (
                                                            <div className="file-preview">
                                                                {fitnessCertificatePreview === 'pdf' ? (
                                                                    <div className="pdf-indicator">
                                                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M14 2V8H20" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                        <p className="pdf-text">PDF {t(lang, "file_selected")}</p>
                                                                    </div>
                                                                ) : (
                                                                    <img src={fitnessCertificatePreview} alt="Preview" className="preview-image" />
                                                                )}
                                                            </div>
                                                        )}
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="field-error" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Club Approval Section - Required */}
                            <div className="section-header">
                                <div className="section-icon">
                                    <Image src={healthy} alt="Document Icon" />
                                </div>
                                <h3 className="section-title">{t(lang, "club_approval")}</h3>
                            </div>
                            <div className="form-grid-single">
                                <FormField
                                    control={form.control}
                                    name="clubApproval"
                                    render={({ field: { onChange, value, ...field } }) => (
                                        <FormItem className="form-field">
                                            <FormControl>
                                                <div className={`file-upload-wrapper ${form.formState.errors.clubApproval ? 'error-input' : value && value.length > 0 ? 'success-input' : ''}`}>
                                                    <input
                                                        type="file"
                                                        accept=".pdf,image/*"
                                                        id="clubApproval"
                                                        className="file-input-hidden"
                                                        onChange={(e) => {
                                                            onChange(e.target.files);
                                                            handleFileChange(e, 'clubApproval', setClubApprovalPreview);
                                                        }}
                                                        {...field}
                                                    />
                                                    <label htmlFor="clubApproval" className="file-upload-label">
                                                        <div className="upload-content">
                                                            <Image src={uploadFile} alt="Upload" className="upload-icon" />
                                                            <p className="upload-text">
                                                                {t(lang, "club_approval_desc")}
                                                            </p>
                                                            <p className="upload-or">{t(lang, "or")}</p>
                                                            <button type="button" className="browse-btn">
                                                                {t(lang, "browse_files")}
                                                            </button>
                                                        </div>
                                                        {clubApprovalPreview && (
                                                            <div className="file-preview">
                                                                {clubApprovalPreview === 'pdf' ? (
                                                                    <div className="pdf-indicator">
                                                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M14 2V8H20" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                        <p className="pdf-text">PDF {t(lang, "file_selected")}</p>
                                                                    </div>
                                                                ) : (
                                                                    <img src={clubApprovalPreview} alt="Preview" className="preview-image" />
                                                                )}
                                                            </div>
                                                        )}
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="field-error" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Form Actions */}
                            <div className="form-actions">
                                <Button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="previous-license-btn"
                                >
                                    {t(lang, "previous")}
                                </Button>
                                <Button
                                    type="submit"
                                    className="submit-license-btn"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="loader-btn"></span>
                                    ) : (
                                        <span>{t(lang, "next")}</span>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}