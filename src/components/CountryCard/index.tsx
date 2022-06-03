import { Card, Typography } from "@mui/material";

import Styled from "./styles";

interface CountryCardProps {
  name: string;
  population: number;
  flag: string;
  capital: string;
  onClick: () => void;
}

const MenuItemCard: React.FC<CountryCardProps> = ({
  name,
  population,
  flag,
  capital,
  onClick,
}) => (
  <Card>
    <Styled.CardActionArea onClick={onClick}>
      <Styled.CardMedia image={flag} />
      <Styled.CardContent>
        <Typography variant="h4">Name: {name}</Typography>
        <Typography>Capital City: {capital}</Typography>
        <Typography>Population: {population}</Typography>
      </Styled.CardContent>
    </Styled.CardActionArea>
  </Card>
);

export default MenuItemCard;
