"use client";
import {
  useSectionsControllerFindOne,
  useSectionsControllerUpdate,
} from "@/app/api/endpoints/sections/sections";
import SectionForm from "./SectionForm";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CommonSuccessModal from "../../common/CommonSuccessModal";
import { ROUTES } from "@/app/utils/constant";
import CommonErrorModal from "../../common/CommonErrorModal";

const SectionUpdate = () => {
  const { id } = useParams();
  const router = useRouter();
  const [successModal, setSuccessVisible] = useState(false);
  const [errorModal, setErrorVisible] = useState(false);
  const [errors, setErrors] = useState([]);

  const { data } = useSectionsControllerFindOne(id as string);
  const dataSection = data?.data;

  const { mutateAsync: updateSection, isPending: updatingSection } =
    useSectionsControllerUpdate();

  const onSubmit = (values: any) => {
    updateSection({
      id: id as string,
      data: {
        id: id as string,
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
      <SectionForm
        saveLoading={updatingSection}
        isUpdate={true}
        entityData={dataSection}
        onSubmit={onSubmit}
      />
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

export default SectionUpdate;
