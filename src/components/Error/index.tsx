import { AlertTitle } from "@mui/material";

import * as Styled from "./styles";

interface Props {
  error: string;
}

const Error = ({ error }: Props) => (
  <Styled.ErrorLayout>
    <Styled.Alert severity="error" variant="outlined">
      <AlertTitle>Error</AlertTitle>
      {error}
    </Styled.Alert>
  </Styled.ErrorLayout>
);

export default Error;
