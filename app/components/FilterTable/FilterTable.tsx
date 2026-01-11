"use client";

import { useEffect, useState } from "react";
import CommonTitle from "../common/CommonTitle";
import CommonButton from "../common/CommonButton";
import CommonSearch from "../common/CommonSearch";
import FilterIcon from "@/app/icons/FilterIcon";
import { PlusOutlined } from "@ant-design/icons";
import { Divider, Form, Table } from "antd";
import { ColumnType } from "antd/es/table";
import CommonDrawer from "../common/CommonDrawer";
import { useSearchParams } from "next/navigation";
import CommonInput from "../common/CommonInput";
import CommonSelect from "../common/CommonSelect";
import CommonDatePicker from "../common/CommonDatePicker";
import FilterDrawer from "./FilterDrawer";

export type FilterFields = {
  name: string;
  label: string;
  placeholder: string;
  options?: any[];
  type: "text" | "select" | "multiselect" | "date";
};

type Props = {
  title: string;
  buttonTitle: string;
  columns: ColumnType[];
  dataSource: any[];
  createLink?: string;
  filterFields?: FilterFields[];
};

const FilterTable = ({
  title,
  buttonTitle = "Add New",
  columns,
  dataSource,
  createLink = "",
  filterFields = [],
}: Props) => {
  const [form] = Form.useForm();
  const params = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(params.get("filter") === "true");
  }, [params]);

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
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={dataSource}
        scroll={{
          x: "max-content",
          y: "calc(100vh - 240px)",
        }}
        rowClassName={(_, index) =>
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        }
      />
      <FilterDrawer open={open} setOpen={setOpen} filterFields={filterFields} />
    </>
  );
};

export default FilterTable;
