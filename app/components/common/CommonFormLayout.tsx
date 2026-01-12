"use client";

import { Col, Row } from "antd";
import React from "react";
import CommonTitle from "./CommonTitle";

type Props = {
  title: string;
  gutter?: [number, number];
  children: React.ReactNode;
  isSection?: boolean;
};

const CommonFormLayout = ({
  title,
  gutter = [16, 16],
  children,
  isSection = false,
}: Props) => {
  return (
    <div className={isSection ? "border border-gray-300 rounded-md p-5" : ""}>
      <Row gutter={gutter}>
        <Col span={24}>
          <CommonTitle isMargin={false} title={title} size="small" />
        </Col>
        {children}
      </Row>
    </div>
  );
};

export default CommonFormLayout;
