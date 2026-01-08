"use client";

import FilterTable from "@/app/components/FilterTable";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </span>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];

  return (
    <div>
      <FilterTable
        columns={columns}
        dataSource={dataSource}
        title="Students"
        buttonTitle="Add Student"
      />
    </div>
  );
};

export default page;
