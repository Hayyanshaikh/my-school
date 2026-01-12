// FilterTableWrapper.tsx
"use client";

import { Suspense } from "react";
import FilterTable, { FilterTableProps } from "./FilterTable";

const FilterTableWrapper = (props: FilterTableProps) => {
  return (
    <Suspense fallback={null}>
      <FilterTable {...props} />
    </Suspense>
  );
};

export default FilterTableWrapper;
