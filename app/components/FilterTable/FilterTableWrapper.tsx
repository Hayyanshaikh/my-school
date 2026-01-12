// FilterTableWrapper.tsx
"use client";

import { Suspense } from "react";
import FilterTable from "./FilterTable";

const FilterTableWrapper = (props: any) => {
  return (
    <Suspense fallback={null}>
      <FilterTable {...props} />
    </Suspense>
  );
};

export default FilterTableWrapper;
