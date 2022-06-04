import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

import FullScreenLoader from "../components/Loader";
import Error from "../components/Error";
import useApiRequest from "../app/hooks/useApiRequest";
import * as Styled from "../pageStyles/countryStyles";
import BorderCountries from "../components/BorderCountries";
import theme from "../app/theme";

interface Country {
  name?: string;
  flag?: string;
  population: number;
  capital?: string;
  currencies?: string[];
  languages?: string[];
  borders?: string[];
}

const Country: NextPage<NextPage> = () => {
  const router = useRouter();
  const countryCode = router.query.country;
  const url = `https://restcountries.com/v2/alpha/${countryCode}?fields=name,flag,population,capital,currencies,languages,borders`;
  const { data, error, isLoading } = useApiRequest(url);

  console.log(data);

  const {
    name = "Unknown",
    flag = "",
    population,
    capital = "Unknown",
    currencies = [],
    languages = [],
    borders = [],
  }: Country = data;

  const grey = theme.palette.text.disabled;

  return (
    (isLoading && <FullScreenLoader />) ||
    (error && <Error error={error} />) ||
    (data && (
      <>
        <Styled.CountryWrapper>
          <Styled.NextImage>
            <Image
              src={flag}
              alt={name}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Styled.NextImage>

          <Styled.CountryInfo elevation={0}>
            <Typography variant="h4" gutterBottom>
              {name}
            </Typography>
            <Typography>
              <span style={{ color: `${grey}` }}>Capital: </span>
              {capital || "Unknown"}
            </Typography>
            <Typography>
              <span style={{ color: `${grey}` }}>Population: </span>
              {population.toLocaleString("en-US")}
            </Typography>

            <Typography>
              <span style={{ color: `${grey}` }}>Currencies: </span>
              {currencies.map((currency: any) => currency.name)}
            </Typography>

            <Typography>
              <span style={{ color: `${grey}` }}>Currencies: </span>
              {languages.map((language: any) => language.name)}
            </Typography>
          </Styled.CountryInfo>
        </Styled.CountryWrapper>
        <BorderCountries borders={borders} />
      </>
    ))
  );
};

export default Country;
