"use client";

import { useStudentsControllerCreate } from "@/app/api/endpoints/students/students";
import CommonErrorModal from "@/app/components/common/CommonErrorModal";
import CommonSuccessModal from "@/app/components/common/CommonSuccessModal";
import StudentForm from "@/app/components/modules/Students/StudentForm";
import { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [successModal, setSuccessVisible] = useState(false);
  const [errorModal, setErrorVisible] = useState(false);
  const [errors, setErrors] = useState([]);

  const { mutateAsync: createStudent, isPending: creating } =
    useStudentsControllerCreate();

  const onSubmit = (values: any) => {
    createStudent({
      data: {
        admissionDate: values.admissionDate,
        birthDate: values.birthDate,
        classId: values.classId,
        sectionId: values.sectionId,
        rollNo: Number(values.rollNo),
        name: values.name,
        age: Number(values.age),
        gender: values.gender,
        fatherName: values.fatherName,
        motherName: values.motherName,
        phone: values.phone,
        email: values.email,
        address: values.address,
        isActive: values.isActive === "ACTIVE",
      },
    })
      .then(() => {
        setSuccessVisible(true);
      })
      .catch((error) => {
        setErrorVisible(true);
        setErrors(error.response.data.errors);
      });
  };
  return (
    <div>
      <StudentForm loading={creating} onSubmit={onSubmit} />
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
