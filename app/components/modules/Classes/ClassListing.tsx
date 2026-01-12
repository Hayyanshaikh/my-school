"use client";

import CommonActionButtons from "@/app/components/common/CommonActionButtons";
import CommonStatusTag from "@/app/components/common/CommonStatusTag";
import { FilterFields } from "@/app/components/FilterTable/FilterTable";
import FilterTable from "@/app/components/FilterTable/FilterTableWrapper";
import {
  classData,
  DISPLAY_DATE,
  ROUTES,
  STATUS_OPTIONS,
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
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Shift",
      dataIndex: "shift",
      key: "shift",
    },
    {
      title: "Sections",
      dataIndex: "sections",
      key: "sections",
      render: (sections: string[]) => sections.join(", "),
    },
    {
      title: "Class Teacher",
      dataIndex: "classTeacher",
      key: "classTeacher",
    },
    {
      title: "Room No",
      dataIndex: "roomNo",
      key: "roomNo",
    },
    {
      title: "Max Students",
      dataIndex: "maxStrength",
      key: "maxStrength",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string) => <CommonStatusTag status={text === "Active"} />,
    },
    {
      title: "Action",
      key: "action",
      width: "1%",
      fixed: "right",
      render: (record: any) => (
        <CommonActionButtons
          editLink={ROUTES.classes.update.replace(":id", record.id)}
          onDelete={() => {
            // delete logic yahan handle hoga
            console.log("Delete ID:", record.id);
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
        title="Classes"
        columns={columns}
        dataSource={classData}
        buttonTitle="Add Class"
        filterFields={filterFields}
        createLink={ROUTES.classes.create}
        pageSize={10}
        currentPage={1}
        total={classData.length}
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
