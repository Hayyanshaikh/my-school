import { Metadata } from "next";
import SectionListing from "@/app/components/modules/Sections/SectionListing";

type Props = {};

export const metadata: Metadata = {
  title: "Section Listing",
  description: "Section Listing",
};

const page = (props: Props) => {
  return <SectionListing />;
};

export default page;
