import Icon from "@ant-design/icons";

// 1️⃣ MyIcon ko function bana do jo props lega
const MyIcon = (props: any) => (
  <svg
    {...props} // size, className etc pass karne ke liye
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6h16" />
    <path d="M6 12h12" />
    <path d="M9 18h6" />
  </svg>
);

// 2️⃣ Icon component ko component prop me function pass karo
const FilterIcon = (props: any) => <Icon component={MyIcon} {...props} />;

export default FilterIcon;
