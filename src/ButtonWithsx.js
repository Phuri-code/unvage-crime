import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function SxPropSample() {
  return (
    <Stack spacing={2} display="inline-flex">
      <Button variant="contained">Hello Button</Button>
      <Button
        variant="contained"
        sx={{
          color: "white",
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "crimson"
          }
        }}
      >
        Hello Styled Button
      </Button>
    </Stack>
  );
}
