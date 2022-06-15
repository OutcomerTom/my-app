import React from "react";
import { Box } from "@mui/material";

type types = {
  children: React.ReactNode;
};

export const Layout = ({ children }: types) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flex="1">
      {children}
    </Box>
  );
};
