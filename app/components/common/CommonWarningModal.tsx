"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { CommonModalProps } from "@/app/types/types";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useKeyPress } from "@/app/hooks/useKeyPress";

const CommonWarningModal: React.FC<CommonModalProps> = ({
  onClose,
  visible,
  setVisible,
  onConfirm,
  okText = "OK",
  loading = false,
  title = "Warning",
  message = "Are you sure you want to proceed?",
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

  const renderTitle = () => (
    <div className="flex items-center gap-3">
      <InfoCircleOutlined style={{ fontSize: "20px", color: "#f59e0b" }} />
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
      confirmLoading={loading}
      onOk={handleConfirm}
      onCancel={handleClose}
      okText={okText}
      okButtonProps={{ className: "min-w-32" }}
      cancelButtonProps={{ className: "min-w-32" }}
    >
      <p className="text-gray-600">{message}</p>
    </Modal>
  );
};

export default CommonWarningModal;
