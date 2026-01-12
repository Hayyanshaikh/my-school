"use client";

import CommonActionButtons from "@/app/components/common/CommonActionButtons";
import CommonStatusTag from "@/app/components/common/CommonStatusTag";
import { FilterFields } from "@/app/components/FilterTable/FilterTable";
import FilterTable from "@/app/components/FilterTable/FilterTableWrapper";
import {
  DISPLAY_DATE,
  ROUTES,
  STATUS_OPTIONS,
  studentData,
} from "@/app/utils/constant";
import { TableColumnType } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import CommonWarningModal from "../../common/CommonWarningModal";
import CommonErrorModal from "../../common/CommonErrorModal";
import CommonSuccessModal from "../../common/CommonSuccessModal";

type Props = {};

const StudentListing = (props: Props) => {
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errors, setErrors] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const columns: TableColumnType[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Section",
      dataIndex: "section",
      key: "section",
    },
    {
      title: "Roll No",
      dataIndex: "roll",
      key: "roll",
    },
    {
      title: "Father",
      dataIndex: "father",
      key: "father",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Admission Date",
      dataIndex: "admissionDate",
      key: "admissionDate",
      render: (text: string) => dayjs(text).format(DISPLAY_DATE),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string) => <CommonStatusTag status={text === "Active"} />,
    },
    {
      title: "View",
      key: "action",
      width: "1%",
      fixed: "right",
      render: (record: any) => (
        <CommonActionButtons
          editLink={ROUTES.students.update.replace(":id", record.id)}
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
      name: "class",
      label: "Class",
      type: "select",
      placeholder: "Select Class",
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
        title="Students"
        columns={columns}
        dataSource={studentData}
        buttonTitle="Add Student"
        filterFields={filterFields}
        createLink={ROUTES.students.create}
        pageSize={10}
        currentPage={1}
        total={studentData.length}
        onPageChange={(page, pageSize) => {
          console.log(page, pageSize);
        }}
      />
      <CommonSuccessModal
        visible={successModal}
        setVisible={setSuccessModal}
        message={"Student deleted successfully"}
      />
      <CommonErrorModal
        visible={errorModal}
        setVisible={setErrorModal}
        message={errors}
      />
      <CommonWarningModal
        visible={deleteModal}
        setVisible={setDeleteModal}
        onConfirm={() => {
          setDeleteId(null);
          setSuccessModal(true);
        }}
        message={"Are you sure you want to delete this student?"}
      />
    </div>
  );
};

export default StudentListing;
