"use client";

import { useEffect, useState } from "react";
import CommonTitle from "../common/CommonTitle";
import CommonButton from "../common/CommonButton";
import CommonSearch from "../common/CommonSearch";
import FilterIcon from "@/app/icons/FilterIcon";
import { PlusOutlined } from "@ant-design/icons";
import { Divider, Table } from "antd";
import { ColumnType, TablePaginationConfig } from "antd/es/table";
import { useSearchParams } from "next/navigation";
import FilterDrawer from "./FilterDrawer";

export type FilterFields = {
  name: string;
  label: string;
  placeholder: string;
  options?: any[];
  type: "text" | "select" | "multiselect" | "date";
};

export type FilterTableProps = {
  title: string;
  buttonTitle: string;
  columns: ColumnType[];
  dataSource: any[];
  createLink?: string;
  filterFields?: FilterFields[];
  pageSize?: number;
  currentPage?: number;
  total?: number;
  onPageChange?: (page: number, pageSize: number) => void;
};

const FilterTable = ({
  title,
  buttonTitle = "Add New",
  columns,
  dataSource,
  createLink = "",
  filterFields = [],
  pageSize = 10,
  currentPage = 1,
  total,
  onPageChange,
}: FilterTableProps) => {
  const params = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(params.get("filter") === "true");
  }, [params]);

  const pagination: TablePaginationConfig = {
    pageSize: pageSize || 10,
    current: currentPage || 1,
    total: total ?? dataSource.length,
    showSizeChanger: true,
    showQuickJumper: false,
    placement: ["bottomCenter"],
    showTotal: (total) => `Total ${total}`,
    onChange: (page, size) => {
      onPageChange?.(page, size);
    },
  };

  return (
    <>
      <CommonTitle title={title} />

      <div className="flex items-center justify-between mb-2">
        <div className="max-w-[350px] w-full">
          <CommonSearch />
        </div>
        <div className="flex items-center">
          <CommonButton
            type="link"
            title="Advance Filter"
            className="font-medium! hover:text-primary!"
            icon={<FilterIcon />}
            link="?filter=true"
          />
          <Divider
            orientation="vertical"
            style={{ borderColor: "#D9D9D9", marginInline: "20px" }}
          />
          <div className="flex items-center justify-between">
            <CommonButton
              icon={<PlusOutlined />}
              title={buttonTitle}
              link={createLink}
            />
          </div>
        </div>
      </div>

      <Table
        bordered
        className="border-b border-gray-100"
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={dataSource}
        scroll={{
          x: "max-content",
          y: "calc(100vh - 330px)",
        }}
        rowClassName={(_, index) =>
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        }
        pagination={pagination}
      />
      <FilterDrawer open={open} setOpen={setOpen} filterFields={filterFields} />
    </>
  );
};

export default FilterTable;
