import { Typography } from "@mui/material";

import * as Styled from "./styles";
import theme from "../../app/theme";

interface CountryCardProps {
  name: string;
  population?: number;
  flag?: string;
  capital?: string;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  population = 0,
  flag = "",
  capital = "",
  onClick,
}) => {
  const getTrimmedName = (name: string, length: number) =>
    name.length > length ? name.substring(0, length) + "..." : name;

  return (
    <Styled.Card>
      <Styled.CardActionArea onClick={onClick}>
        <Styled.CardMedia image={flag || ""} />
        <Styled.CardContent>
          <Typography variant="h5" gutterBottom>
            {getTrimmedName(name, 14) || ""}
          </Typography>
          <Typography color={theme.palette.text.disabled}>
            Capital: {getTrimmedName(capital, 13) || "Unknown"}
          </Typography>
          <Typography color={theme.palette.text.disabled} variant="subtitle2">
            Population: {population.toLocaleString("en-US") || "Unknown"}
          </Typography>
        </Styled.CardContent>
      </Styled.CardActionArea>
    </Styled.Card>
  );
};

export default CountryCard;
