import ClassUpdate from "@/app/components/modules/Classes/ClassUpdate";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Update Student",
  description: "Update Student",
};

const page = (props: Props) => {
  return (
    <div>
      <ClassUpdate />
    </div>
  );
};

export default page;
