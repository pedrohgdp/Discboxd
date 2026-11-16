"use client"

import SettingsButton from "@discboxd/components/settingsButton"
import ChangeProfile from "@/Components/ChangeProfile"
import { useState } from "react";

type ProfileProps = {
    bannerUrl?: string
    profilePhotoUrl?: string
    name: string
    bio: string
    username: string
}

export default function ProfileHeader( {bannerUrl, profilePhotoUrl, name, bio, username} : ProfileProps){
    const [profileModalOpen, setModalProfileOpen] = useState(false);

    return (
        <div className="w-full flex justify-left bg-slate-900/50 shadow-lg shadow-black/10">

            {/*BAR DIV SEPARATION*/}
            <div className="w-0.5 shrink-0 self-stretch bg-white/10" />
            <div className="w-full max-w-[1200px]">
                <div className="h-0.5 w-full bg-white/10" />

                {/* Banner */}
                <div className="w-full grid">
                    <img
                        src={bannerUrl ?? './ImagemPreta.png'}
                        className="w-full aspect-[3/1] object-cover shadow-lg shadow-black/30 [grid-area:1/1]"
                    />
                    <SettingsButton onClick={() => setModalProfileOpen(true)}/>
                    <ChangeProfile isOpen={profileModalOpen} onClose={() => setModalProfileOpen(false)} />
                </div>

                

                {/* Perfil */}
                <div className="flex items-center gap-4 px-5">

                    <img
                        src={profilePhotoUrl ?? './ImagemPreta.png'}
                        className="
                            w-[25%] max-w-[150] aspect-square
                            rounded-full
                            object-cover
                            border border-white/30
                            -mt-[7.5%]
                            shadow-lg shadow-black/30
                        "
                    />
                </div>

                {/*Nome e bio*/}
                <div className="flex flex-col pt-2 pl-5">
                    <div className="flex items-center gap-2">
                        <h2 className="text-[50px] leading-none">{name}</h2>
                        <p className="text-white/30 text-[20px] leading-none pt-2">@{username}</p>
                    </div>
                    <p>{bio}</p>
                </div>
                            
                <div className="h-0.5 w-full bg-white/10 mt-5" />
            </div>
            <div className="w-0.5 shrink-0 self-stretch bg-white/10" />

        </div>
    );
}