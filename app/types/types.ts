export interface CommonModalProps {
  visible: boolean;
  setVisible: (_visible: boolean) => void;
  onConfirm?: () => void;
  title?: string;
  message: string[] | string;
  loading?: boolean;
  onClose?: () => void;
  okText?: string;
  cancelText?: string;
}

export interface Section {
  id: string;
  name: string;
  status: string;
}
