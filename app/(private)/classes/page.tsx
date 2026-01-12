import { Metadata } from "next";
import ClassListing from "@/app/components/modules/Classes/ClassListing";

type Props = {};

export const metadata: Metadata = {
  title: "Class Listing",
  description: "Class Listing",
};

const page = (props: Props) => {
  return <ClassListing />;
};

export default page;
