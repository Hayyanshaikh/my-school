import { useState } from "react";

export const useErrorModal = () => {
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorResponse, setErrorResponse] = useState<any>();

  const errorMsg =
    errorResponse?.response?.data?.message || "Internal server error";
  const errorMessages = Array.isArray(errorMsg) ? errorMsg : [errorMsg];

  return {
    errorMessages,
    setErrorResponse,
    errorModalVisible,
    setErrorModalVisible,
  };
};
