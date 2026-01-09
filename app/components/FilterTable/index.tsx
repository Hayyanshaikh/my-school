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
      <div className="flex items-center justify-between mb-5">
        <CommonTitle title={title} />
      </div>

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
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={dataSource}
        scroll={{
          x: "max-content",
        }}
        rowClassName={(_, index) =>
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        }
      />
      <CommonDrawer
        size="large"
        open={open}
        footer={
          <>
            <CommonButton
              type="default"
              title="Reset"
              onClick={() => form.resetFields()}
            />
            <CommonButton title="Apply" />
          </>
        }
        closeIcon={false}
        title="Advance Filter"
        onClose={() => setOpen(false)}
      >
        <Form form={form} className="flex flex-col gap-2">
          {filterFields.map((field: FilterFields, index: number) => {
            switch (field.type) {
              case "select":
                return (
                  <CommonSelect
                    key={index}
                    name={field.name}
                    isRequired={false}
                    label={field.label}
                    placeholder={field.placeholder}
                    options={field.options || []}
                  />
                );

              case "multiselect":
                return (
                  <CommonSelect
                    key={index}
                    name={field.name}
                    isRequired={false}
                    label={field.label}
                    placeholder={field.placeholder}
                    options={field.options || []}
                    mode="multiple"
                  />
                );

              case "date":
                return (
                  <CommonDatePicker
                    key={index}
                    name={field.name}
                    isRequired={false}
                    label={field.label}
                    placeholder={field.placeholder}
                  />
                );

              default:
                // text input
                return (
                  <CommonInput
                    key={index}
                    name={field.name}
                    isRequired={false}
                    label={field.label}
                    placeholder={field.placeholder}
                  />
                );
            }
          })}
        </Form>
      </CommonDrawer>
    </>
  );
};

export default FilterTable;
