"use client";

import React, { ReactNode } from "react";
import { Tooltip, TooltipProps } from "antd";

interface CommonToolTipProps {
  content: string;
  children: ReactNode;
  className?: string;
  placement?: TooltipProps["placement"];
}

const CommonToolTip: React.FC<CommonToolTipProps> = ({
  content,
  children,
  className,
  placement = "top",
}) => {
  return (
    <Tooltip
      title={content}
      placement={placement}
      openClassName="custom-ant-tooltip text-xs"
    >
      <span className={className}>{children}</span>
    </Tooltip>
  );
};

export default CommonToolTip;
