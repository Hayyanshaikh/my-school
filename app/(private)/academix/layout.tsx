"use client";

import React from "react";
import { Layout, Menu, Button } from "antd";
import { MessageOutlined, PlusOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

type Props = {
  children: React.ReactNode;
};

const ChatLayout = ({ children }: Props) => {
  return (
    <Layout>
      {/* Sidebar */}
      {/* <Sider className="border-r border-black/10" width={260} theme="light">
        <div className="h-16 flex items-center px-4 font-semibold text-lg border-b border-black/10">
          AI Chat
        </div>

        <div className="p-3">
          <Button type="primary" icon={<PlusOutlined />} block className="mb-3">
            New Chat
          </Button>

          <Menu
            mode="inline"
            items={[
              {
                key: "1",
                icon: <MessageOutlined />,
                label: "Previous Chat 1",
              },
              {
                key: "2",
                icon: <MessageOutlined />,
                label: "Previous Chat 2",
              },
            ]}
          />
        </div>
      </Sider> */}

      {/* Main Section */}
      <Layout className="relative">
        {/* Header */}
        <Header className="gradient-bg w-full justify-center border-b border-black/10 px-6 flex items-center font-medium">
          Chat With{" "}
          <span className="text-primary font-semibold ml-1">Academix AI</span>
        </Header>

        {/* Chat Content */}
        <Content className="p-6 pb-0 overflow-y-auto gradient-bg">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ChatLayout;
