"use client";

import { Button, Dropdown, Layout } from "antd";
import { Footer, Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import SidebarMenu from "../components/layout/SidebarMenu";
import Link from "next/link";
import CommonButton from "../components/common/CommonButton";
import CommonDropdown from "../components/common/CommonDropdown";
import { DownOutlined } from "@ant-design/icons";
import useAuthStore from "../stores/useAuthStore";
import useCookieStore from "../stores/useCookieStore";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  const router = useRouter();
  const { logout } = useAuthStore();
  const { removeCookie } = useCookieStore();

  const handleLogout = () => {
    logout();
    removeCookie("access_token");
    router.push("/login");
  };

  return (
    <Layout className="flex h-screen ">
      <Sider
        style={{ background: "#fff" }}
        className="overflow-auto border-r border-black/20"
      >
        <Link
          href="/"
          className="block text-lg font-bold px-5 py-3 text-primary!"
        >
          My School
        </Link>
        <SidebarMenu />
      </Sider>
      <Layout>
        <Header className="flex items-center justify-between border-b border-black/20">
          <span>Header</span>
          <Dropdown
            trigger={["click"]}
            menu={{
              items: [
                {
                  label: "Logout",
                  key: "logout",
                  onClick: handleLogout,
                },
              ],
            }}
          >
            <Button icon={<DownOutlined />} />
          </Dropdown>
        </Header>
        <Content className="h-full! overflow-auto! p-6 flex flex-col">
          {children}
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
};

export default layout;
