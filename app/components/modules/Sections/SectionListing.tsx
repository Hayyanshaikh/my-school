"use client";

import CommonActionButtons from "@/app/components/common/CommonActionButtons";
import CommonStatusTag from "@/app/components/common/CommonStatusTag";
import { FilterFields } from "@/app/components/FilterTable/FilterTable";
import FilterTable from "@/app/components/FilterTable/FilterTableWrapper";
import { DISPLAY_DATE, ROUTES, STATUS_OPTIONS } from "@/app/utils/constant";
import { TableColumnType } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import CommonWarningModal from "../../common/CommonWarningModal";
import CommonErrorModal from "../../common/CommonErrorModal";
import CommonSuccessModal from "../../common/CommonSuccessModal";
import {
  useSectionsControllerFindAll,
  useSectionsControllerRemove,
} from "@/app/api/endpoints/sections/sections";
import { Section } from "@/app/types/types";

type Props = {};

const StudentListing = (props: Props) => {
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errors, setErrors] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const {
    data: sectionsRes,
    isLoading: sectionsLoading,
    refetch: refetchSections,
  } = useSectionsControllerFindAll();

  const { mutateAsync: removeSection, isPending: removeSectionLoading } =
    useSectionsControllerRemove();

  const sections = sectionsRes?.data || [];

  const columns: TableColumnType[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, record: any) => (
        <CommonStatusTag status={record.isActive} />
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "1%",
      fixed: "right",
      render: (record: any) => (
        <CommonActionButtons
          editLink={ROUTES.sections.update.replace(":id", record.id)}
          onDelete={() => {
            setDeleteId(record.id);
            setDeleteModal(true);
          }}
        />
      ),
    },
  ];

  const filterFields: FilterFields[] = [
    {
      name: "name",
      type: "text",
      label: "Student Name",
      placeholder: "Search by Name",
    },
    {
      name: "section",
      label: "Section",
      type: "select",
      placeholder: "Select Section",
    },
    {
      name: "section",
      label: "Section",
      type: "select",
      placeholder: "Select Section",
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: STATUS_OPTIONS,
      placeholder: "Select Status",
    },
    {
      type: "date",
      name: "admissionDate",
      label: "Admission Date",
      placeholder: "Select Admission Date",
    },
  ];

  return (
    <div>
      <FilterTable
        pageSize={10}
        currentPage={1}
        title="Sections"
        columns={columns}
        dataSource={sections}
        loading={sectionsLoading}
        buttonTitle="Add Section"
        filterFields={filterFields}
        createLink={ROUTES.sections.create}
        total={sectionsRes?.metadata?.total}
        onPageChange={(page, pageSize) => {
          console.log(page, pageSize);
        }}
      />
      <CommonSuccessModal
        visible={successModal}
        setVisible={setSuccessModal}
        onConfirm={() => {
          refetchSections();
        }}
        message={"Student deleted successfully"}
      />
      <CommonErrorModal
        visible={errorModal}
        setVisible={setErrorModal}
        message={errors}
      />
      <CommonWarningModal
        loading={removeSectionLoading}
        visible={deleteModal}
        setVisible={setDeleteModal}
        onConfirm={() => {
          removeSection({
            id: deleteId || "",
          })
            .then(() => {
              setSuccessModal(true);
            })
            .catch((error) => {
              setErrorModal(true);
              setErrors(error.response.data.errors);
            });
          setDeleteId(null);
          setSuccessModal(true);
        }}
        message={"Are you sure you want to delete this student?"}
      />
    </div>
  );
};

export default StudentListing;
