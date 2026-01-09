"use client";

import React from "react";
import { Input } from "antd";

const { Search } = Input;

type Props = {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  allowClear?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

const CommonSearch = ({
  placeholder = "Search...",
  onSearch,
  onChange,
  allowClear = true,
  loading = false,
  disabled = false,
}: Props) => {
  return (
    <Search
      className="w-full"
      placeholder={placeholder}
      onSearch={onSearch}
      onChange={onChange}
      allowClear={allowClear}
      loading={loading}
      disabled={disabled}
    />
  );
};

export default CommonSearch;
