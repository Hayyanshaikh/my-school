"use client";

import React from "react";
import { Button } from "antd";
import Link from "next/link";

type Props = {
  title?: string;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  link?: string;
};

const CommonButton = ({
  title,
  onClick,
  loading = false,
  disabled = false,
  type = "primary",
  className,
  icon,
  link,
}: Props) => {
  if (link) {
    return (
      <Link href={link}>
        <Button
          icon={icon}
          type="link"
          disabled={disabled}
          className={className}
        >
          {title}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      icon={icon}
      type={type}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      className={className}
    >
      {title}
    </Button>
  );
};

export default CommonButton;
