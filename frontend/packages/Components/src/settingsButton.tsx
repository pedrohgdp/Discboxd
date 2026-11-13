"use client";

import { motion } from "motion/react";

type SettingsButtonProps = {
  onClick?: () => void;
};

export default function SettingsButton({ onClick }: SettingsButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.92 }}
      className="
        z-20 m-4
        flex h-9 w-9 flex-col
        items-center justify-center gap-[5px]
        justify-self-end self-start
        rounded-full
        border border-white/15
        bg-slate-950/60
        backdrop-blur-md
        transition-colors duration-200
        hover:bg-white/15
        [grid-area:1/1]
      "
    >
      <motion.span className="h-[2px] w-4 rounded-full bg-white" />
      <motion.span className="h-[2px] w-4 rounded-full bg-white" />
      <motion.span className="h-[2px] w-4 rounded-full bg-white" />
    </motion.button>
  );
}