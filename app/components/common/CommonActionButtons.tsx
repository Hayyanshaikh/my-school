"use client";

import React from "react";
import { Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CommonToolTip from "./CommonToolTip";

type Props = {
  showEdit?: boolean;
  showDelete?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  customAction?: React.ReactNode;
};

const CommonActionButtons = ({
  showEdit = true,
  showDelete = true,
  onEdit,
  onDelete,
  customAction,
}: Props) => {
  return (
    <Space>
      {showEdit && (
        <CommonToolTip content="Edit">
          <Button
            className="icon_button h-7! w-7! p-0!"
            size="small"
            icon={<EditOutlined />}
            onClick={onEdit}
          />
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
