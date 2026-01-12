"use client";

import React from "react";

type Props = {
  title: string;
  isMargin?: boolean;
  size?: "small" | "default";
};

const CommonTitle = ({ title, isMargin = true, size = "default" }: Props) => {
  return (
    <h2
      className={`font-bold ${isMargin ? "mb-5" : ""} ${
        size === "small" ? "text-[13px] text-primary" : "text-xl"
      }`}
    >
      {title}
    </h2>
  );
};

export default CommonTitle;
