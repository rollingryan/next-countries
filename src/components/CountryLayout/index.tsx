import Image from "next/image";
import { Typography } from "@mui/material";

import * as Styled from "./styles";
import BorderCountries from "../BorderCountries";

interface Country {
  name: string;
  flag: string;
  population: number;
  capital: string;
  currencies: string[];
  languages: string[];
  borders: string[];
}

interface Props {
  country: Country;
  isLoading: boolean;
}

const CountryLayout: React.FC<Props> = ({ country }) => (
  <Styled.CountryWrapper>
    <Styled.NextImage>
      <Image
        src={country.flag}
        alt={country.name}
        layout="fill"
        objectFit="cover"
        priority
      />
    </Styled.NextImage>

    <Typography variant="h4">Name: {country.name}</Typography>

    <Typography>Capital City: {country.capital}</Typography>

    <Typography>Population: {country.population}</Typography>

    <Typography>
      {`Currencies: ${country.currencies.map(
        (currency: any) => currency.name
      )}`}
    </Typography>

    <Typography>{`Languages: ${country.languages.map(
      (language: any) => language.name
    )}`}</Typography>

    <BorderCountries borders={country.borders} />
  </Styled.CountryWrapper>
);

export default CountryLayout;
