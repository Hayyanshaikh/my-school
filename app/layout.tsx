import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import "./globals.css";
import ReactQueryProvider from "./QueryClientProvider";
import { StrictMode } from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "My School",
    template: "%s | My School",
  },
  description: "My School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  itemHoverBg: "#0001",
                  itemBg: "transparent",
                  itemActiveBg: "transparent",
                  itemSelectedColor: "white",
                  itemSelectedBg: "#0041ae",
                },
                Layout: {
                  bodyBg: "#fff",
                  headerBg: "white",
                  headerHeight: "auto",
                  headerPadding: "16px 24px",
                  footerBg: "white",
                  footerPadding: "16px 24px",
                },
                Table: {
                  cellPaddingBlock: 10,
                  borderColor: "#e5e5e5",
                  headerBg: "#e9f1ff",
                },
              },
              token: {
                borderRadius: 4,
                colorPrimary: "#0041ae",
                colorBorder: "#e5e5e5",
              },
            }}
          >
            <StrictMode>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </StrictMode>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
