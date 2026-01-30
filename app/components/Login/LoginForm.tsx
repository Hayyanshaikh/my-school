"use client";
import React, { useState } from "react";
import { Form } from "antd";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import { useAuthControllerLogin } from "@/app/api/endpoints/auth/auth";
import { LoginResponseDto } from "@/app/api/models";
import CommonErrorModal from "../common/CommonErrorModal";
import useAuthStore from "@/app/stores/useAuthStore";
import useCookieStore from "@/app/stores/useCookieStore";
import { useErrorModal } from "@/app/hooks/useErrorModal";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { mutateAsync: login, isPending: isLoginPending } =
    useAuthControllerLogin();

  const { updateToken, setUser } = useAuthStore();
  const { setCookie } = useCookieStore();

  const {
    errorMessages,
    setErrorResponse,
    errorModalVisible,
    setErrorModalVisible,
  } = useErrorModal();

  const onFinish = async (values: any) => {
    try {
      const res: LoginResponseDto = await login({
        data: {
          username: values.username,
          password: values.password,
        },
      });

      updateToken(res.access_token);
      setUser(res.data, res.access_token);
      setCookie("access_token", res.access_token);

      router.push("/");
    } catch (err: any) {
      setErrorResponse(err);
      setErrorModalVisible(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[350px]">
        <h2 className="text-xl text-center font-semibold py-4 px-6 border-b border-black/10">
          Login
        </h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="flex flex-col gap-4 p-6!"
        >
          <CommonInput name="username" label="Username" />
          <CommonInput name="password" label="Password" type="password" />
          <CommonButton
            title="Login"
            htmlType="submit"
            className="w-full mt-3"
            loading={isLoginPending}
          />
        </Form>
      </div>

      <CommonErrorModal
        visible={errorModalVisible}
        setVisible={setErrorModalVisible}
        title="Login Failed"
        message={errorMessages}
      />
    </div>
  );
};

export default LoginForm;
