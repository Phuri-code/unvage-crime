import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "crimson"
  }
}));

export default function StyledSample() {
  return (
    <Stack spacing={2} display="inline-flex">
      <Button variant="contained">Hello Button</Button>
      <StyledButton variant="contained">Hello Styled Button</StyledButton>
    </Stack>
  );
}
