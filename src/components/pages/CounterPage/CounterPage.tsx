import React from "react";
import * as Counter from "../../Counter";
import { Layout } from "../../Layout";

export const CounterPage = () => {
  return (
    <Layout>
      <Counter.Counter />;
    </Layout>
  );
};
