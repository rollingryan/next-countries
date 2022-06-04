import { Typography } from "@mui/material";

import * as Styled from "./styles";
import theme from "../../app/theme";

interface CountryCardProps {
  name?: string;
  population?: number;
  flag?: string;
  capital?: string;
  onClick?: () => void;
  className?: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name = "Unknown",
  population = "0",
  flag = "",
  capital = "Unknown",
  onClick,
  className = "",
}) => {
  const getTrimmedName = (name: string, length: number) =>
    name.length > length ? name.substring(0, length) + "..." : name;

  const grey = theme.palette.text.disabled;

  return (
    <Styled.Card className={className}>
      <Styled.CardActionArea onClick={onClick}>
        <Styled.CardMedia image={flag} />
        <Styled.CardContent>
          <Typography variant="h5" gutterBottom>
            {getTrimmedName(name, 14)}
          </Typography>
          <Typography variant="subtitle2">
            <span style={{ color: `${grey}` }}>Capital: </span>
            {getTrimmedName(capital, 13)}
          </Typography>
          <Typography variant="subtitle2">
            <span style={{ color: `${grey}` }}>Population: </span>
            {population?.toLocaleString("en-US")}
          </Typography>
        </Styled.CardContent>
      </Styled.CardActionArea>
    </Styled.Card>
  );
};

export default CountryCard;
