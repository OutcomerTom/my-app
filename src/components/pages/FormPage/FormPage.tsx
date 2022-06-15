import React from "react";
import { InputForm } from "../../InputForm";
import { Layout } from "../../Layout";

export const FormPage = () => {
  return (
    <Layout>
      <InputForm defaultValue={">here<"} />
    </Layout>
  );
};
