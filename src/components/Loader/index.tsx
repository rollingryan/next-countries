import { CircularProgress } from "@mui/material";

import * as Styled from "./styles";

const FullScreenLoader = () => (
  <Styled.LoaderLayout>
    <CircularProgress />
  </Styled.LoaderLayout>
);

export default FullScreenLoader;
