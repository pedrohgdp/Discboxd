"use client"

import { useState, useEffect } from "react"
import Cropper, { type Area, type Point } from "react-easy-crop"

type CropProps = {
    imageUrl: string;
    isOpen: boolean;
    onClose: () => void;
    onSave: (image: Blob) => void;
    aspect: number;
    outputWidth: number;
    outputHeight: number;
}

function createImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = url;
    });
}

async function getCroppedImage(imageUrl: string, croppedArea: Area): Promise<Blob> {
    const image = await createImage(imageUrl);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) throw new Error("Could not create canvas context");

    canvas.width = croppedArea.width;
    canvas.height = croppedArea.height;

    ctx.drawImage(
        image,
        croppedArea.x,
        croppedArea.y,
        croppedArea.width,
        croppedArea.height,
        0,
        0,
        croppedArea.width,
        croppedArea.height
    );

    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (blob) resolve(blob);
            else reject(new Error("Could not generate cropped image"));
        }, "image/jpeg", 0.95);
    });
  }

export default function Crop({ imageUrl, isOpen, onClose, onSave, aspect }: CropProps) {
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

    if (!isOpen) return null;

    const handleSave = async () => {
        if (!croppedAreaPixels) return;

        try {
            const croppedImage = await getCroppedImage(
                imageUrl,
                croppedAreaPixels
            );

            onSave(croppedImage);
        } catch (error) {
            console.error("Error cropping image:", error);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="w-full max-w-[1000px] overflow-hidden rounded-xl bg-slate-900">
                <div className="relative h-[400px] w-full bg-black">
                    <Cropper
                        image={imageUrl}
                        crop={crop}
                        zoom={zoom}
                        aspect={aspect}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={(_, croppedAreaPixels) => {
                            setCroppedAreaPixels(croppedAreaPixels);
                        }}
                    />
                </div>

                <div className="flex justify-end gap-3 border-t border-slate-800 p-4">
                    <button
                        onClick={onClose}
                        className="rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white hover:bg-violet-500"
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
}