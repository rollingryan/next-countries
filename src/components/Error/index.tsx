import { AlertTitle } from "@mui/material";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

import * as Styled from "./styles";

export interface Props {
  error: FetchBaseQueryError | SerializedError;
}

interface Data {
  message?: string;
}

const Error = ({ error }: Props) => {
  let errorMessage;

  if ("status" in error) {
    const data = error.data as Data;
    errorMessage = "error" in error ? error.error : data.message;
  } else {
    errorMessage = error.message;
  }

  return (
    <Styled.ErrorLayout data-testid="error">
      <Styled.Alert severity="error" variant="outlined">
        <AlertTitle>Error</AlertTitle>
        <span data-testid="error__message">{errorMessage}</span>
      </Styled.Alert>
    </Styled.ErrorLayout>
  );
};

export default Error;
