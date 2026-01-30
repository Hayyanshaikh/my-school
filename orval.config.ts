import { defineConfig } from "orval";

export default defineConfig({
  mySchool: {
    input: {
      target: `http://localhost:3001/swagger/v3/openapi-json`,
    },
    output: {
      mode: "tags-split",
      target: "app/api/endpoints",
      schemas: "app/api/models",
      client: "react-query",
      baseUrl: "http://localhost:3001",
      override: {
        mutator: {
          path: "./app/api/axios.ts",
          name: "axiosInstance",
        },
      },
    },
  },
});
