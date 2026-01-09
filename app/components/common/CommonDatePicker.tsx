"use client";

import React from "react";
import { DatePicker, Form } from "antd";
import type { Dayjs } from "dayjs";
import "antd/dist/reset.css";

type Props = {
  name?: string;
  value?: Dayjs | null;
  onChange?: (date: Dayjs | null, dateString: string | null) => void;
  placeholder?: string;
  rules?: any[];
  label?: string;
  isRequired?: boolean;
};

const CommonDatePicker = ({
  name,
  value,
  onChange,
  placeholder,
  rules = [],
  label,
  isRequired = false,
}: Props) => {
  return (
    <Form.Item
      layout="vertical"
      name={name}
      label={
        label && (
          <span className="text-xs text-gray-600 font-medium">{label}</span>
        )
      }
      required={isRequired}
      className="mb-0"
      rules={
        isRequired
          ? [{ required: true, message: `${label} is required.` }, ...rules]
          : rules
      }
    >
      <DatePicker
        value={value ?? null}
        onChange={onChange}
        placeholder={placeholder || "Select date"}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        format="YYYY-MM-DD"
      />
    </Form.Item>
  );
};

export default CommonDatePicker;
