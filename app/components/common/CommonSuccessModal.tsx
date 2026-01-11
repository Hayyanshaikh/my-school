"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useKeyPress } from "@/app/hooks/useKeyPress";
import { CommonModalProps } from "@/app/types/types";

const CommonSuccessModal: React.FC<CommonModalProps> = ({
  visible,
  setVisible,
  title = "Success",
  onConfirm,
  message = "Operation successful",
  onClose,
  okText = "OK",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useKeyPress("Escape", () => {
    handleClose();
    handleConfirm();
  });

  useKeyPress("Enter", () => {
    handleConfirm();
  });

  const handleClose = () => {
    onClose?.();
    handleConfirm();
    setVisible(false);
  };
  const handleConfirm = () => {
    onConfirm?.();
    setVisible(false);
  };

  const renderTitle = () => (
    <div className="flex items-center gap-3">
      <CheckCircleOutlined style={{ fontSize: "20px", color: "#22c55e" }} />
      <h2 className="text-xl">{title}</h2>
    </div>
  );

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
      okButtonProps={{ htmlType: "button", className: "min-w-32" }}
      cancelButtonProps={{ htmlType: "button", style: { display: "none" } }}
    >
      <p className="text-gray-600">{message}</p>
    </Modal>
  );
};

export default CommonSuccessModal;
