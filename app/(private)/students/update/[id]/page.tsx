import StudentUpdate from "@/app/components/modules/Students/StudentUpdate";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Update Student",
  description: "Update Student",
};

const page = (props: Props) => {
  return <div>
    <StudentUpdate />
  </div>;
};

export default page;