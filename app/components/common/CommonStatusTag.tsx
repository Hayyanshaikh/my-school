"use client";

import React from "react";

type Props = {
  status: boolean;
};

const CommonStatusTag = ({ status }: Props) => {
  return (
    <span
      className={`px-3 py-1 rounded-full font-medium text-xs ${
        status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {status ? "Active" : "Inactive"}
    </span>
  );
};

export default CommonStatusTag;
