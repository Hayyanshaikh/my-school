import { Metadata } from "next";
import StudentListing from "@/app/components/modules/Students/StudentListing";

type Props = {};

export const metadata: Metadata = {
  title: "Student Listing",
  description: "Student Listing",
};

const page = (props: Props) => {
  return <StudentListing />
};

export default page;