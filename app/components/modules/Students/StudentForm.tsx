"use client";

import React from "react";
import { Form, Button, Row, Col, Divider } from "antd";
import CommonSelect from "../../common/CommonSelect";
import CommonInput from "../../common/CommonInput";
import CommonDatePicker from "../../common/CommonDatePicker";
import CommonTitle from "@/app/components/common/CommonTitle";
import CommonButton from "../../common/CommonButton";
import CommonFormLayout from "../../common/CommonFormLayout";
import {
  CLASS_OPTIONS,
  GENDER_OPTIONS,
  ROUTES,
  SECTION_OPTIONS,
  STATUS_OPTIONS,
} from "@/app/utils/constant";

type Props = {
  onSubmit: (values: any) => void;
  isUpdate?: boolean;
};

const StudentForm = ({ onSubmit, isUpdate }: Props) => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    onSubmit(values);
  };

  const handleFinishFailed = (errorInfo: any) => {
    if (errorInfo.errorFields.length > 0) {
      const firstField = errorInfo.errorFields[0].name[0];
      form.scrollToField(firstField);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between gap-2 mb-5">
        <CommonTitle
          isMargin={false}
          title={isUpdate ? "Update Student" : "Create Student"}
        />
        <div className="flex gap-2">
          <CommonButton
            onClick={() => form.submit()}
            title="Save"
            type="primary"
            className="flex-1"
          />

          <CommonButton
            title="Discard"
            type="default"
            link={ROUTES.students.listing}
            className="flex-1"
          />
        </div>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        className="border border-gray-300 rounded-md p-5! space-y-5"
      >
        <CommonFormLayout title="Basic Information">
          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonInput
              name="name"
              label="Name"
              placeholder="Enter name"
              isRequired
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonInput
              name="age"
              label="Age"
              type="number"
              placeholder="Enter age"
              isRequired
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonDatePicker
              name="birthDate"
              label="Date of Birth"
              isRequired={false}
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonSelect
              name="gender"
              label="Gender"
              options={GENDER_OPTIONS}
              isRequired
            />
          </Col>
        </CommonFormLayout>

        <CommonFormLayout title="Academic Details">
          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonSelect
              name="classId"
              label="Class"
              options={CLASS_OPTIONS}
              isRequired
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonSelect
              name="sectionId"
              label="Section"
              options={SECTION_OPTIONS}
              isRequired
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonDatePicker
              name="admissionDate"
              label="Admission Date"
              isRequired
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonInput
              name="rollNo"
              label="Roll No"
              type="number"
              placeholder="Enter roll number"
              isRequired
            />
          </Col>
        </CommonFormLayout>

        <CommonFormLayout title="Parent / Guardian Details">
          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonInput
              name="fatherName"
              label="Father Name"
              placeholder="Enter father name"
              isRequired={false}
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonInput
              name="motherName"
              label="Mother Name"
              placeholder="Enter mother name"
              isRequired={false}
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonInput
              name="phone"
              label="Phone"
              placeholder="Enter phone number"
              isRequired={false}
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              isRequired={false}
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonInput
              name="address"
              label="Address"
              placeholder="Enter address"
              isRequired={false}
            />
          </Col>
        </CommonFormLayout>

        <CommonFormLayout title="Status">
          <Col xs={24} sm={12} md={12} lg={6}>
            <CommonSelect
              name="isActive"
              label="Status"
              options={STATUS_OPTIONS}
              isRequired={false}
            />
          </Col>
        </CommonFormLayout>
      </Form>
    </div>
  );
};

export default StudentForm;
