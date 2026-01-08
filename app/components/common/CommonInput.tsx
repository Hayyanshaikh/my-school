"use client";

import React from "react";
import { Input, Form } from "antd";

type Props = {
  name: string;
  label?: string;
  rules?: any[];
  isRequired?: boolean;

  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  disabled?: boolean;
  maxLength?: number;
  allowClear?: boolean;
  size?: "small" | "middle" | "large";
};

const CommonInput = ({
  name,
  label,
  rules = [],
  isRequired = false,
  placeholder = "Type here",
  type = "text",
  disabled = false,
  maxLength,
  allowClear = true,
  size = "middle",
}: Props) => {
  return (
    <Form.Item
      layout="vertical"
      name={name}
      label={label}
      required={isRequired}
      rules={
        isRequired
          ? [{ required: true, message: `${label} required hai` }, ...rules]
          : rules
      }
    >
      <Input
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        maxLength={maxLength}
        allowClear={allowClear}
        size={size}
      />
    </Form.Item>
  );
};

export default CommonInput;
