"use client";

import { Layout } from "antd";
import { Footer, Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import SidebarMenu from "../components/layout/SidebarMenu";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <Layout>
      <Sider
        style={{ background: "#fff" }}
        className="h-screen overflow-auto border-r border-black/10"
      >
        <Link
          href="/"
          className="block sticky top-0 z-10 text-lg font-bold px-5 py-3 text-primary! border-b  border-white/10"
        >
          My School
        </Link>
        <SidebarMenu />
      </Sider>
      <Layout>
        <Header className="border-b border-black/10">Header</Header>
        <Content className="h-[calc(100%-64px)] p-6">{children}</Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
};

export default layout;
