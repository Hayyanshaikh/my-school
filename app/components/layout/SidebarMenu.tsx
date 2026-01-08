"use client";

import { menuItems } from "@/app/utils/constant";
import { Menu } from "antd";
import { ItemType } from "antd/es/menu/interface";
import Link from "next/link";
import { usePathname } from "next/navigation"; // App Router hook
import React from "react";

type Props = {};

const SidebarMenu = (props: Props) => {
  const pathname = usePathname(); // current path

  const menuList: ItemType[] = menuItems.map((item) => ({
    label: (
      <Link className="text-xs font-medium text-gray-800" href={item.link}>
        {item.label}
      </Link>
    ),
    key: item.link,
  }));

  return (
    <div>
      <Menu items={menuList} selectedKeys={[pathname]} />
    </div>
  );
};

export default SidebarMenu;
