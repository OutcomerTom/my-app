import React from "react";
import Button from "@mui/material/Button";

export const HomePage = () => {
  return (
    <div>
      <hr />
      <Button
        variant="contained"
        onClick={() =>
          window.open("https://github.com/OutcomerTom/my-app/", "_blank")
        }
      >
        Go to repo
      </Button>

      <hr />
    </div>
  );
};
