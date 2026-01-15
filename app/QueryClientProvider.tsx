"use client";
import {
  QueryClient,
  QueryClientProvider as RQProvider,
} from "@tanstack/react-query";
import React, { useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ReactQueryProvider = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 0,
            // retry: false,
          },
        },
      })
  );

  return <RQProvider client={queryClient}>{children}</RQProvider>;
};

export default ReactQueryProvider;
