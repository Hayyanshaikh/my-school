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
  htmlType?: "button" | "submit" | "reset";
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
  htmlType,
  link,
}: Props) => {
  if (link) {
    return (
      <Link href={link}>
        <Button
          icon={icon}
          htmlType={htmlType}
          type={type}
          disabled={disabled}
          className={`${className} min-w-28`}
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
      htmlType={htmlType}
      loading={loading}
      disabled={disabled}
      className={`${className} min-w-28`}
    >
      {title}
    </Button>
  );
};

export default CommonButton;
