"use client";

import { Form, FormInstance } from "antd";
import React from "react";
import CommonInput from "../../common/CommonInput";
import CommonButton from "../../common/CommonButton";
import { PlusOutlined, SendOutlined } from "@ant-design/icons";

type Props = {
  onSubmit: (values: any) => void;
  form: FormInstance;
};

const ChatInputForm = ({ onSubmit, form }: Props) => {
  return (
    <Form form={form} onFinish={onSubmit}>
      <div className="flex gap-3">
        <CommonInput
          isRequired={false}
          autoFocus
          name="message"
          placeholder="Type your question..."
          className="w-full"
          inputClassName="h-10"
        />

        <CommonButton
          title="Send"
          iconPosition="end"
          className="min-w-auto!"
          icon={<SendOutlined />}
          htmlType="submit"
        />
      </div>
    </Form>
  );
};

export default ChatInputForm;
