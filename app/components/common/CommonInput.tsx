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
  autoFocus?: boolean;
  allowClear?: boolean;
  size?: "small" | "middle" | "large";
  className?: string;
  inputClassName?: string;
};

const CommonInput = ({
  name,
  label,
  rules = [],
  isRequired = true,
  autoFocus = false,
  placeholder = "Type here",
  type = "text",
  disabled = false,
  maxLength,
  allowClear = true,
  size = "middle",
  className,
  inputClassName,
}: Props) => {
  const renderInput = () => {
    switch (type) {
      case "password":
        return (
          <Input.Password
            placeholder={disabled ? "" : placeholder}
            type={type}
            disabled={disabled}
            maxLength={maxLength}
            allowClear={allowClear}
            autoFocus={autoFocus}
            size={size}
            className={inputClassName}
          />
        );
      default:
        return (
          <Input
            placeholder={disabled ? "" : placeholder}
            type={type}
            disabled={disabled}
            maxLength={maxLength}
            allowClear={allowClear}
            autoFocus={autoFocus}
            size={size}
            className={inputClassName}
          />
        );
    }
  };

  return (
    <Form.Item
      layout="vertical"
      name={name}
      label={<span className="text-gray-600 font-medium">{label}</span>}
      required={isRequired}
      className={`${className} mb-0!`}
      rules={
        isRequired
          ? [{ required: true, message: `${label} is required.` }, ...rules]
          : rules
      }
    >
      {renderInput()}
    </Form.Item>
  );
};

export default CommonInput;
