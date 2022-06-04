import { Typography } from "@mui/material";

import * as Styled from "./styles";

interface Props {
  borders: string[];
}

const BorderCountries: React.FC<Props> = ({ borders }) => (
  <Styled.BordersWrap>
    {(borders.length > 0 && (
      <Typography>{`Borders: ${borders.map(
        (border: string) => ` ${border}`
      )}`}</Typography>
    )) || <Typography>This country is an island &#127965;&#65039;</Typography>}
  </Styled.BordersWrap>
);

export default BorderCountries;
