import { AlertTitle } from "@mui/material";
import { SerializedError } from "@reduxjs/toolkit";

import * as Styled from "./styles";

interface Props {
  error: SerializedError;
}

const Error = ({ error }: Props) => (
  <Styled.ErrorLayout data-testid="error">
    <Styled.Alert severity="error" variant="outlined">
      <AlertTitle>Error</AlertTitle>
      <span data-testid="error__message">{error.message}</span>
    </Styled.Alert>
  </Styled.ErrorLayout>
);

export default Error;
