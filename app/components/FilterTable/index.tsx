"use client";

import React from "react";
import CommonTitle from "../common/CommonTitle";
import CommonButton from "../common/CommonButton";
import CommonSearch from "../common/CommonSearch";
import CommonDropdown from "../common/CommonDropdown";
import FilterIcon from "@/app/icons/FilterIcon";
import { PlusOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { ColumnType } from "antd/es/table";

type Props = {
  title: string;
  buttonTitle: string;
  columns: ColumnType[];
  dataSource: any[];
};

const FilterTable = ({
  title,
  buttonTitle = "Add New",
  columns,
  dataSource,
}: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <CommonTitle title={title} />
        <div className="flex items-center justify-between">
          <CommonButton icon={<PlusOutlined />} title={buttonTitle} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <div className="max-w-[300px]">
          <CommonSearch />
        </div>
        <CommonDropdown
          title="Advance Filter"
          icon={<FilterIcon />}
          showDropdownIcon={false}
          items={[
            { label: "Edit", key: "edit" },
            { label: "Delete", key: "delete" },
          ]}
        />
      </div>

      <Table bordered columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default FilterTable;
