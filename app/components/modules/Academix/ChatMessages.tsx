"use client";

import { WarningOutlined } from "@ant-design/icons";
import React from "react";
import CommonThinking from "../../common/CommonThinking";

export type Message = {
  id: string;
  role: "user" | "assistant";
  type?: "error" | "success" | "info" | "warning";
  text: string;
};

type Props = {
  messages: Message[];
  loading: boolean;
};

const ChatMessages = ({ messages, loading }: Props) => {
  return (
    <div className="space-y-4 mb-auto">
      {messages?.map((msg: Message, index: number) => (
        <div key={index} className="flex items-start gap-3">
          {msg.type === "error" && (
            <WarningOutlined className="*:text-red-500 mt-2 text-lg" />
          )}
          <div
            className={`py-2 px-3 rounded-md max-w-lg shadow-sm ${
              msg.role === "user"
                ? "bg-primary text-white ml-auto justify-self-end"
                : msg.type === "error"
                  ? "border border-red-500 bg-red-100 justify-self-start"
                  : "bg-white justify-self-start"
            }`}
          >
            <div className="text-sm leading-relaxed whitespace-pre-line">
              {msg.text}
            </div>
          </div>
        </div>
      ))}
      {loading && <CommonThinking />}
    </div>
  );
};

export default ChatMessages;
