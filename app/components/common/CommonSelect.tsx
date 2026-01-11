"use client";

import React from "react";
import { Select, Form } from "antd";

type CommonSelectOption = {
  label: string;
  value: string | number;
};

type Props = {
  name: string;
  label?: string;
  rules?: any[];
  isRequired?: boolean;
  options: CommonSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  mode?: "multiple" | "tags" | undefined;
  size?: "small" | "middle" | "large";
};

const CommonSelect: React.FC<Props> = ({
  name,
  label,
  isRequired = true,
  rules,
  options,
  placeholder = "Select",
  disabled = false,
  allowClear = true,
  mode,
  size = "middle",
}) => {
  return (
    <Form.Item
      layout="vertical"
      name={name}
      label={<span className="text-gray-600 font-medium">{label}</span>}
      required={isRequired}
      className="mb-0!"
      rules={
        isRequired
          ? [
              { required: true, message: `${label} is required.` },
              ...(rules || []),
            ]
          : rules
      }
    >
      <Select
        options={options}
        placeholder={placeholder}
        disabled={disabled}
        allowClear={allowClear}
        mode={mode}
        size={size}
      />
    </Form.Item>
  );
};

export default CommonSelect;
