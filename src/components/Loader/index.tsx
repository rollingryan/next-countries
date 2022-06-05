import { CircularProgress } from "@mui/material";

import * as Styled from "./styles";

interface Props {
  contained?: boolean;
}

const Loader: React.FC<Props> = ({ contained = false }) => (
  <Styled.LoaderLayout className={contained ? "contained" : ""}>
    <CircularProgress />
  </Styled.LoaderLayout>
);

export default Loader;
