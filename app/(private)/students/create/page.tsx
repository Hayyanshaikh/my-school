"use client";

import CommonErrorModal from "@/app/components/common/CommonErrorModal";
import CommonSuccessModal from "@/app/components/common/CommonSuccessModal";
import StudentForm from "@/app/components/modules/Students/StudentForm";
import { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [successModal, setSuccessVisible] = useState(false);
  const [errorModal, setErrorVisible] = useState(false);
  const [errors, setErrors] = useState([]);

  const onSubmit = (values: any) => {
    try {
      console.log({ values });
      setSuccessVisible(true);
    } catch (error) {
      setErrorVisible(true);
      // FIXME: Type error
      // @ts-ignore
      setErrors(error);
    }
  };
  return (
    <div>
      <StudentForm onSubmit={onSubmit} />
      <CommonSuccessModal
        visible={successModal}
        setVisible={setSuccessVisible}
        message={"Student created successfully"}
      />
      <CommonErrorModal
        visible={errorModal}
        setVisible={setErrorVisible}
        message={errors}
      />
    </div>
  );
};

export default page;
