"use client";

import { Form, Col } from "antd";
import CommonInput from "../../common/CommonInput";
import CommonSelect from "../../common/CommonSelect";
import CommonTitle from "@/app/components/common/CommonTitle";
import CommonButton from "../../common/CommonButton";
import CommonFormLayout from "../../common/CommonFormLayout";
import { ROUTES, STATUS_OPTIONS, SECTION_OPTIONS } from "@/app/utils/constant";
import { useEffect } from "react";
import { ResponseSectionDto } from "@/app/api/models";

type Props = {
  onSubmit: (values: any) => void;
  isUpdate?: boolean;
  saveLoading: boolean;
  entityData?: ResponseSectionDto;
};

const SectionForm = ({
  onSubmit,
  isUpdate,
  saveLoading,
  entityData,
}: Props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (entityData && isUpdate) {
      form.setFieldsValue({
        name: entityData?.name || null,
        status: entityData?.isActive ? "ACTIVE" : "INACTIVE",
      });
    }
  }, [entityData, form, isUpdate]);

  useEffect(() => {
    form.setFieldValue("status", "ACTIVE");
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <CommonTitle
          isMargin={false}
          title={isUpdate ? entityData?.name : "Create Section"}
        />
        <div className="flex gap-2">
          <CommonButton
            title="Save"
            type="primary"
            loading={saveLoading}
            onClick={() => form.submit()}
          />
          <CommonButton
            title="Discard"
            type="default"
            link={ROUTES.sections.listing}
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
            <CommonInput
              name="name"
              label="Name"
              placeholder="Enter name"
              isRequired
              autoFocus
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
      </Form>
    </div>
  );
};

export default SectionForm;
