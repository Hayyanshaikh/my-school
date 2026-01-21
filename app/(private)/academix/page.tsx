"use client";

import { useState } from "react";
import { Form, message } from "antd";
import ChatInputForm from "@/app/components/modules/Academix/ChatInputForm";
import ChatMessages, {
  Message,
} from "@/app/components/modules/Academix/ChatMessages";
import { useAcademixControllerGenerate } from "@/app/api/endpoints/academix/academix";
import { ResponseAcademixDto } from "@/app/api/models";

const page = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [messages, setMessages] = useState<Message[]>([]);
  // const [messages, setMessages] = useState<Message[]>([
  //   {
  //     id: "1",
  //     role: "assistant",
  //     text: "Assalamualaikum! Main aap ka AI assistant hoon.\nAap apne school records add kar sakte hain.\nAap ko kis section se start karna hai?",
  //   },
  //   {
  //     id: "2",
  //     role: "user",
  //     text: "Waalaikumussalam.\nMain attendance add karna chahta hoon.\nClass 8-A ke students ka attendance.\nAaj ki date ke liye.",
  //   },
  //   {
  //     id: "3",
  //     role: "assistant",
  //     text: "Theek hai.\nAap date, class aur total students bata dein.\nMain attendance sheet create kar deta hoon.\nAap confirm kar dein.",
  //   },
  //   {
  //     id: "4",
  //     role: "user",
  //     text: "Date: 21-Jan-2026.\nClass: 8-A.\nTotal students: 32.\nAbsent: 2.",
  //   },
  //   {
  //     id: "5",
  //     role: "assistant",
  //     text: "Attendance record save ho gaya.\nAbsent students ka naam add karna hai?\nAgar haan to names send kar dein.\nNahi to next task batain.",
  //   },
  //   {
  //     id: "6",
  //     role: "user",
  //     text: "Haan, absent students:\nAli Khan\nSara Ahmed.\nReport bhi generate kar dein.\nIs month ka summary.",
  //   },
  //   {
  //     id: "7",
  //     role: "assistant",
  //     text: "Report generate kar raha hoon.\nAap class aur date range confirm kar dein.\nMain aap ko PDF summary bana kar dunga.\nKya aapko detailed report chahiye?",
  //   },
  //   {
  //     id: "8",
  //     role: "user",
  //     text: "Class: 8-A.\nDate range: 01-Jan to 21-Jan.\nDetailed report chahiye.\nIncluding attendance percentage.",
  //   },
  //   {
  //     id: "9",
  //     role: "assistant",
  //     text: "Detailed report ready hai.\nAttendance percentage calculate ho gaya.\nAap download kar sakte hain.\nKisi aur class ka report chahiye?",
  //   },
  //   {
  //     id: "10",
  //     role: "user",
  //     text: "Haan, 9-B ka report bhi generate kar dein.\nFees records bhi check karna hai.\nAgar due students hon to list bana dein.\nThanks.",
  //   },
  // ]);

  const { mutateAsync: sendMessage, isPending: isPendingSendMessage } =
    useAcademixControllerGenerate();

  const onFinish = (values: any) => {
    if (values?.message) {
      const userMessage: Message = {
        id: String(messages.length + 1),
        role: "user",
        text: values?.message || "",
      };

      setMessages((prev) => [...prev, userMessage]);
      form.resetFields();

      sendMessage({
        data: { prompt: values?.message || "" },
      })
        .then((res: ResponseAcademixDto) => {
          const assistantMessage: Message = {
            id: String(messages.length + 1),
            role: "assistant",
            text: res?.data?.text || "",
          };

          setMessages((prev) => [...prev, assistantMessage]);
        })
        .catch((err) => {
          const errorMessage = JSON.parse(err.response.data.data[0]);
          // messageApi.error(
          //   errorMessage?.error?.message || "Something went wrong",
          // );

          const assistantMessage: Message = {
            id: String(messages.length + 1),
            role: "assistant",
            type: "error",
            text: errorMessage?.error?.message || "Something went wrong",
          };

          setMessages((prev) => [...prev, assistantMessage]);
        });
    } else {
      messageApi.error("Please enter a message");
    }
  };

  return (
    <>
      {contextHolder}
      <div
        className={`flex justify-center h-full ${messages?.length > 0 ? "" : "items-center"}`}
      >
        <div className="max-w-2xl w-full flex flex-col">
          {messages?.length > 0 ? (
            <ChatMessages loading={isPendingSendMessage} messages={messages} />
          ) : (
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">
                Ask anything, AI will answer.
              </h1>
            </div>
          )}

          <div className="sticky! bottom-0! py-4 gradient-bg">
            <ChatInputForm form={form} onSubmit={onFinish} />

            <div className="mt-3 text-center text-gray-500 text-xs">
              Tip: You can use this to start a new AI conversation.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
