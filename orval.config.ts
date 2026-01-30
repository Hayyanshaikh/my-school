import { defineConfig } from "orval";

export default defineConfig({
  mySchool: {
    input: {
      target: `http://localhost:5001/swagger/v3/openapi-json`,
    },
    output: {
      mode: "tags-split",
      target: "app/api/endpoints",
      schemas: "app/api/models",
      client: "react-query",
      baseUrl: "http://localhost:5001",
      override: {
        mutator: {
          path: "./app/api/axios.ts",
          name: "axiosInstance",
        },
      },
    },
  },
});
