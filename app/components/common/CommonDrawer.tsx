"use client";

import React, { ReactNode } from "react";
import { Drawer } from "antd";
import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  size?: "large" | "default";
  title?: string;
  onClose: () => void;
  footer?: ReactNode;
  closeIcon?: boolean;
  width?: number;
  children: ReactNode;
  placement?: "right" | "left" | "top" | "bottom";
};

const CommonDrawer = ({
  open,
  size,
  title,
  footer,
  onClose,
  closeIcon = true,
  width = 350,
  children,
  placement = "right",
}: Props) => {
  const router = useRouter();

  return (
    <Drawer
      open={open}
      title={title}
      closeIcon={closeIcon}
      onClose={() => {
        onClose();
        router.back();
      }}
      placement={placement}
      destroyOnHidden
      footer={footer}
      size={size}
      styles={{
        header: {
          padding: "15px 20px",
        },
        body: {
          padding: "15px 20px",
        },
        footer: {
          padding: "15px 20px",
          display: "flex",
          gap: "10px",
          justifyContent: "flex-end",
        },
        wrapper: {
          width,
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default CommonDrawer;
