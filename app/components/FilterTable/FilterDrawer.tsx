"use client";

import React from "react";
import { Form } from "antd";
import CommonDrawer from "../common/CommonDrawer";
import CommonButton from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
import CommonSelect from "../common/CommonSelect";
import CommonDatePicker from "../common/CommonDatePicker";
import { FilterFields } from "./FilterTable";

type Props = {
  open: boolean;
  filterFields: FilterFields[];
  setOpen: (open: boolean) => void;
};

const FilterDrawer = ({
  open,
  filterFields,
  setOpen,
}: Props) => {
  const [form] = Form.useForm();

  const handleApply = async () => {
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <CommonDrawer
      onClose={() => setOpen(false)}
      size="large"
      open={open}
      title="Advance Filter"
      closeIcon={false}
      footer={
        <>
          <CommonButton
            type="default"
            title="Reset"
            onClick={handleReset}
          />
          <CommonButton title="Apply" onClick={handleApply} />
        </>
      }
    >
      <Form form={form} className="flex flex-col gap-2">
        {filterFields.map((field, index) => {
          switch (field.type) {
            case "select":
              return (
                <CommonSelect
                  key={index}
                  isRequired={false}
                  name={field.name}
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
              return (
                <CommonInput
                  key={index}
                  isRequired={false}
                  name={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                />
              );
          }
        })}
      </Form>
    </CommonDrawer>
  );
};

export default FilterDrawer;
