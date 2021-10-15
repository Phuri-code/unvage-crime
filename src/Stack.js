import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function StackSample() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={2}
      display="inline-flex"
    >
      <Typography>item 1</Typography>
      <Typography>item 2</Typography>
      <Typography>item 3</Typography>
    </Stack>
  );
}
