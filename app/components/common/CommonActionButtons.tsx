"use client";

import React from "react";
import { Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CommonToolTip from "./CommonToolTip";
import Link from "next/link";

type Props = {
  showEdit?: boolean;
  showDelete?: boolean;
  onEdit?: () => void;
  editLink?: string;
  onDelete?: () => void;
  customAction?: React.ReactNode;
};

const CommonActionButtons = ({
  showEdit = true,
  showDelete = true,
  onEdit,
  editLink,
  onDelete,
  customAction,
}: Props) => {
  return (
    <Space>
      {showEdit && (
        <CommonToolTip content="Edit">

          {editLink ? (<Link href={editLink || ""}>
            <Button
              className="icon_button h-7! w-7! p-0!"
              size="small"
              icon={<EditOutlined />}
              onClick={onEdit}
            />
          </Link>) : (<Button
            className="icon_button h-7! w-7! p-0!"
            size="small"
            icon={<EditOutlined />}
            onClick={onEdit}
          />)}

        </CommonToolTip>
      )}

      {showDelete && (
        <CommonToolTip content="Delete">
          <Button
            className="icon_button bg-red-200! **:fill-red-800! h-7! w-7! p-0!"
            size="small"
            icon={<DeleteOutlined />}
            onClick={onDelete}
          />
        </CommonToolTip>
      )}

      {customAction}
    </Space>
  );
};

export default CommonActionButtons;
