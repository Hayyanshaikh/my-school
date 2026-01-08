"use client";

import React from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

type ItemType = {
  label: string;
  key: string;
};

type Props = {
  title: string;
  items: ItemType[];
  onClick?: (key: string) => void;
  disabled?: boolean;
  showDropdownIcon?: boolean;
  icon?: React.ReactNode;
};

const CommonDropdown = ({
  title,
  items,
  onClick,
  disabled = false,
  showDropdownIcon = true,
  icon,
}: Props) => {
  const menuItems: MenuProps["items"] = items.map((item) => ({
    label: item.label,
    key: item.key,
  }));

  return (
    <Dropdown
      menu={{
        items: menuItems,
        onClick: ({ key }) => onClick?.(key),
      }}
      disabled={disabled}
    >
      <span className="cursor-pointer flex items-center gap-1">
        {icon}
        {title}
        {showDropdownIcon && <DownOutlined />}
      </span>
    </Dropdown>
  );
};

export default CommonDropdown;
