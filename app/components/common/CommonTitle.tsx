"use client";

import React from "react";

type Props = {
  title: string;
};

const CommonTitle = ({ title }: Props) => {
  return <h2 className="text-xl font-bold">{title}</h2>;
};

export default CommonTitle;
