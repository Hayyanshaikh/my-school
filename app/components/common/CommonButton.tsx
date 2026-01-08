"use client";

import { Button } from "antd";

type Props = {
  title: string;
  onClick?: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: "primary" | "default" | "dashed" | "link" | "text";
};

const CommonButton = ({
  title,
  onClick,
  loading = false,
  disabled = false,
  type = "primary",
  icon,
}: Props) => {
  return (
    <Button
      icon={icon}
      type={type}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default CommonButton;
