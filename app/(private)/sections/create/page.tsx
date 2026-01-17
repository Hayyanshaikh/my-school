"use client";

import { useSectionsControllerCreate } from "@/app/api/endpoints/sections/sections";
import CommonErrorModal from "@/app/components/common/CommonErrorModal";
import CommonSuccessModal from "@/app/components/common/CommonSuccessModal";
import SectionForm from "@/app/components/modules/Sections/SectionForm";
import { ROUTES } from "@/app/utils/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const [successModal, setSuccessVisible] = useState(false);
  const [errorModal, setErrorVisible] = useState(false);
  const [errors, setErrors] = useState([]);

  const { mutateAsync: createSection, isPending: creatingSection } =
    useSectionsControllerCreate();

  const onSubmit = (values: any) => {
    createSection({
      data: {
        name: values.name,
        isActive: values.status === "ACTIVE",
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
      <SectionForm saveLoading={creatingSection} onSubmit={onSubmit} />
      <CommonSuccessModal
        visible={successModal}
        setVisible={setSuccessVisible}
        message={"Section created successfully"}
        onConfirm={() => {
          router.push(ROUTES.sections.listing);
        }}
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
