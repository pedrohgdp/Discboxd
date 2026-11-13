"use client"

import { useEffect, useState } from "react";
import Crop from "@/Components/Crop";
import { useChanges } from "./useChanges";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
 
    const {
        form,
        touched,
        errors,
        isValid,
        isLoading,
        submitError,
        updateField,
        handleBlur,
        handleSubmit,
    } = useChanges()

    const [cropOpen, setCropOpen] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [bannerImage, setBannerImage] = useState<Blob | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) return;

        const imageUrl = URL.createObjectURL(file);

        setSelectedImage(imageUrl);
        setCropOpen(true);

        // Permite selecionar o mesmo arquivo novamente.
        e.target.value = "";
    };

    const handleCropSave = (croppedImage: Blob) => {
        return;
    };

    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape"){
                if(cropOpen){
                    setCropOpen(false);
                    return;
                }

                onClose();
            }
        };

        document.addEventListener("keydown", onKey);

        const prev = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
        };

    }, [isOpen, onClose, cropOpen]);

    if (!isOpen) return null;

    return (

        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-violet-950/40"
            >

            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
                <h2 id="modal-title" className="text-lg font-semibold text-slate-100">
                    Perfil settings
                </h2>
                <button
                    onClick={onClose}
                    aria-label="Fechar"
                    className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>
                </div>

                <div className="p-6">
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
                        <span className="text-[20px]">Username</span>
                        <input className={`border-2 rounded-lg p-2`}
                                name="username"
                                autoComplete="username"
                                placeholder="@username"
                                value={form.username}
                                onChange={(e) => updateField('username', e.target.value)}
                                onFocus={(e) => e.target.placeholder = ' '}
                                onBlur={() => handleBlur('username')}
                        >
                        </input>
                        {touched.username && errors.username && (
                            <span className="text-red-500">{errors.username}</span>
                        )}

                        <span className="text-[20px]">Password</span>
                        <input className={`border-2 rounded-lg p-2`}
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="password"
                                value={form.password}
                                onChange={(e) => updateField('password', e.target.value)}
                                onFocus={(e) => e.target.placeholder = ' '}
                                onBlur={() => handleBlur('password')}
                        >
                        </input>
                        {touched.password && errors.password && (
                            <span className="text-red-500">{errors.password}</span>
                        )}

                        <span className="text-[20px]">Confirm Password</span>
                        <input className={`border-2 rounded-lg p-2`}
                                type="password"
                                name="confirmPassword"
                                placeholder="Password"
                                autoComplete="confirmPassword"
                                value={form.confirmPassword}
                                onChange={(e) => updateField('confirmPassword', e.target.value)}
                                onFocus={(e) => e.target.placeholder = ' '}
                                onBlur={() => handleBlur('confirmPassword')}
                        >
                        </input>
                        {touched.confirmPassword && errors.confirmPassword && (
                            <span className="text-red-500">{errors.confirmPassword}</span>
                        )}
                    </form>
                    
                    <div className="flex gap-57 pt-10">
                        <div className="flex">
                            <input
                                type="file"
                                accept="image/*"
                                id="banner-upload"
                                className="hidden"
                                onChange={handleImageChange}
                            />

                            <label
                                htmlFor="banner-upload"
                                className="flex cursor-pointer items-center gap-3 rounded-xl bg-indigo-500/15 px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                            >
                                Upload Banner Image
                            </label>
                        </div>

                        <div className="flex">
                            <input
                                type="file"
                                accept="image/*"
                                id="profile-upload"
                                className="hidden"
                                onChange={handleImageChange}
                                onClick={() => setIsProfile(true)}
                            />

                            <label
                                htmlFor="profile-upload"
                                className="flex cursor-pointer items-center gap-3 rounded-xl bg-indigo-500/15 px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                            >
                                Upload Profile Image
                            </label>
                        </div>
                    </div>

                </div>


                <div className="flex justify-end gap-3 border-t border-slate-800 px-6 py-4">
                    <button
                        onClick={onClose}
                        className="rounded-lg px-4 py-2 text-slate-300 transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    >
                        Save
                    </button>
                </div>
            </div>
            {cropOpen && selectedImage && (
                <Crop
                    imageUrl={selectedImage}
                    isOpen={cropOpen}
                    outputWidth={isProfile ? 150 : 1200}
                    outputHeight={isProfile ? 150 : 400}
                    onClose={() => setCropOpen(false)}
                    onSave={handleCropSave}
                    aspect={isProfile ? 1 : 3 / 1}
                />
            )}
            
        </div>
    );
}