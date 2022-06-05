import { Typography } from "@mui/material";

import * as Styled from "./styles";
import theme from "../../app/theme";
import trimString from "../../app/utils/trimString";

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
  flag = "https://via.placeholder.com/400x200",
  capital = "Unknown",
  onClick,
  className = "",
}) => {
  const grey = theme.palette.text.disabled;

  return (
    <Styled.Card
      className={className}
      data-testid="country-card"
      data-cy="country-card"
    >
      <Styled.CardActionArea
        onClick={onClick}
        data-testid="country-card__button"
        data-cy="country-card__button"
      >
        <Styled.CardMedia
          image={flag}
          data-testid="country-card__flag"
          data-cy="country-card__flag"
        />
        <Styled.CardContent>
          <Typography
            variant="h5"
            gutterBottom
            data-testid="country-card__name"
            data-cy="country-card__name"
          >
            {trimString(name, 14)}
          </Typography>
          <Typography
            variant="subtitle2"
            data-testid="country-card__capital"
            data-cy="country-card__capital"
          >
            <span style={{ color: `${grey}` }}>Capital: </span>
            {trimString(capital, 13)}
          </Typography>
          <Typography
            variant="subtitle2"
            data-testid="country-card__population"
            data-cy="country-card__population"
          >
            <span style={{ color: `${grey}` }}>Population: </span>
            {population?.toLocaleString("en-US")}
          </Typography>
        </Styled.CardContent>
      </Styled.CardActionArea>
    </Styled.Card>
  );
};

export default CountryCard;
