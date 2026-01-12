"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useKeyPress } from "@/app/hooks/useKeyPress";
import { CommonModalProps } from "@/app/types/types";

const CommonErrorModal: React.FC<CommonModalProps> = ({
  visible,
  onClose,
  onConfirm,
  setVisible,
  okText = "OK",
  title = "Error",
  message = ["An error occurred"],
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useKeyPress("Escape", () => {
    handleClose();
  });

  useKeyPress("Enter", () => {
    handleConfirm();
  });

  const handleClose = () => {
    onClose?.();
    setVisible(false);
  };
  const handleConfirm = () => {
    onConfirm?.();
    setVisible(false);
  };

  const renderTitle = () => {
    return (
      <div className="flex items-center gap-3">
        <ExclamationCircleOutlined
          style={{
            fontSize: "20px",
            color: "#cf231f",
          }}
        />
        <h2 className="text-xl">{title}</h2>
      </div>
    );
  };

  if (!mounted) return null;

  return (
    <Modal
      centered
      width={450}
      title={renderTitle()}
      open={visible}
      onOk={handleConfirm}
      onCancel={handleClose}
      okText={okText}
      okButtonProps={{ className: "min-w-32" }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <div className="flex flex-col gap-1 text-gray-500">
        {Array.isArray(message)
          ? message.map((msg, index) => (
              <span key={index} className="block">
                {msg}
              </span>
            ))
          : message}
      </div>
    </Modal>
  );
};

export default CommonErrorModal;
