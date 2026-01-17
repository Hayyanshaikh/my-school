import SectionUpdate from "@/app/components/modules/Sections/SectionUpdate";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Update Student",
  description: "Update Student",
};

const page = (props: Props) => {
  return (
    <div>
      <SectionUpdate />
    </div>
  );
};

export default page;
