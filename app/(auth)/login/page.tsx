import LoginForm from "@/app/components/Login/LoginForm";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

const page = (props: Props) => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default page;
