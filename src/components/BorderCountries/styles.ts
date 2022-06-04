import styled from "@emotion/styled";
import { Paper, PaperProps } from "@mui/material";

export const BordersWrap = styled(Paper)<PaperProps>`
  padding: 4rem 2rem;
  border-radius: 0;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
`;
