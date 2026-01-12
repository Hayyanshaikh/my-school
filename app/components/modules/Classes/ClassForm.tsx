"use client";

import React from "react";
import { Form, Col } from "antd";
import CommonInput from "../../common/CommonInput";
import CommonSelect from "../../common/CommonSelect";
import CommonTitle from "@/app/components/common/CommonTitle";
import CommonButton from "../../common/CommonButton";
import CommonFormLayout from "../../common/CommonFormLayout";
import { ROUTES, STATUS_OPTIONS, SECTION_OPTIONS } from "@/app/utils/constant";

type Props = {
  onSubmit: (values: any) => void;
  isUpdate?: boolean;
};

const ClassForm = ({ onSubmit, isUpdate }: Props) => {
  const [form] = Form.useForm();

  return (
    <div>
      <div className="flex justify-between mb-5">
        <CommonTitle
          isMargin={false}
          title={isUpdate ? "Update Class" : "Create Class"}
        />
        <div className="flex gap-2">
          <CommonButton
            title="Save"
            type="primary"
            onClick={() => form.submit()}
          />
          <CommonButton
            title="Discard"
            type="default"
            link={ROUTES.classes.listing}
          />
        </div>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        className="border border-gray-300 rounded-md p-5! space-y-5"
      >
        {/* Basic Information */}
        <CommonFormLayout title="Basic Information">
          <Col lg={6}>
            <CommonInput isRequired={false} name="code" label="Code" disabled />
          </Col>

          <Col lg={6}>
            <CommonInput
              name="name"
              label="Name"
              placeholder="Enter name"
              isRequired
            />
          </Col>

          <Col lg={6}>
            <CommonSelect
              name="shift"
              label="Shift"
              placeholder="Select shift"
              options={[]}
              isRequired={false}
            />
          </Col>

          <Col lg={6}>
            <CommonSelect
              name="status"
              label="Status"
              placeholder="Select status"
              options={STATUS_OPTIONS}
              isRequired
            />
          </Col>
        </CommonFormLayout>

        {/* Academic Setup */}
        <CommonFormLayout title="Academic Setup">
          <Col lg={6}>
            <CommonSelect
              name="sections"
              label="Sections"
              placeholder="Select sections"
              options={SECTION_OPTIONS}
              mode="multiple"
              isRequired
            />
          </Col>

          <Col lg={6}>
            <CommonSelect
              name="classTeacher"
              label="Class Teacher"
              placeholder="Select teacher"
              options={[]}
              isRequired
            />
          </Col>

          <Col lg={6}>
            <CommonInput
              name="roomNo"
              label="Room No"
              placeholder="Enter room number"
              isRequired
            />
          </Col>

          <Col lg={6}>
            <CommonInput
              name="totalStudents"
              label="Total Students"
              placeholder="Enter total students"
              disabled
              type="number"
              isRequired={false}
            />
          </Col>
        </CommonFormLayout>
      </Form>
    </div>
  );
};

export default ClassForm;
