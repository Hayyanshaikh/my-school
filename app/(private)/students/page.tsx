"use client";

import CommonActionButtons from "@/app/components/common/CommonActionButtons";
import CommonStatusTag from "@/app/components/common/CommonStatusTag";
import FilterTable, { FilterFields } from "@/app/components/FilterTable";
import { DISPLAY_DATE, STATUS_OPTIONS } from "@/app/utils/constant";
import { TableColumnType } from "antd";
import dayjs from "dayjs";

type Props = {};

const StudentListing = (props: Props) => {
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
      render: (text) => dayjs(text).format(DISPLAY_DATE),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <CommonStatusTag status={text === "Active"} />,
    },
    {
      title: "View",
      key: "action",
      width: "1%",
      fixed: "right",
      render: () => <CommonActionButtons />,
    },
  ];

  const dataSource = [
    {
      id: 1,
      name: "Ali Khan",
      class: "Class 1",
      section: "A",
      roll: 5,
      father: "Ahmed Khan",
      contact: "03001234567",
      admissionDate: "2026-01-05",
      status: "Active",
    },
    {
      id: 2,
      name: "Sara Malik",
      class: "Class 2",
      section: "B",
      roll: 12,
      father: "Shahid Malik",
      contact: "03007654321",
      admissionDate: "2025-09-10",
      status: "Active",
    },
    {
      id: 3,
      name: "Hamza Ali",
      class: "Class 1",
      section: "C",
      roll: 7,
      father: "Imran Ali",
      contact: "03009876543",
      admissionDate: "2026-01-07",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Ayesha Noor",
      class: "Class 3",
      section: "A",
      roll: 2,
      father: "Farooq Noor",
      contact: "03006543210",
      admissionDate: "2024-06-15",
      status: "Active",
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
        columns={columns}
        dataSource={dataSource}
        title="Students"
        buttonTitle="Add Student"
        filterFields={filterFields}
      />
    </div>
  );
};

export default StudentListing;
