import Image from "next/image";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

import Loader from "../components/Loader";
import Error from "../components/Error";
import useApiRequest from "../app/hooks/useApiRequest";
import * as Styled from "../pageStyles/countryStyles";
import BorderCountries from "../components/BorderCountries";
import theme from "../app/theme";

interface CountryProps {
  name?: string;
  flag?: string;
  population: number;
  capital?: string;
  currencies?: string[];
  languages?: string[];
  borders?: string[];
}

const initCountry: CountryProps = {
  name: "Unknown",
  flag: "",
  population: 0,
  capital: "Unknown",
  currencies: [],
  languages: [],
  borders: [],
};

const Country: NextPage = () => {
  const router = useRouter();
  const countryCode = router.query.country;
  const url = `https://restcountries.com/v2/alpha/${countryCode}?fields=name,flag,population,capital,currencies,languages,borders`;
  const { data, error, isLoading } = useApiRequest(url);
  const [country, setCountry] = useState(initCountry);

  useEffect(() => {
    if (data) {
      setCountry(data);
    }
  }, [data]);

  const grey = theme.palette.text.disabled;

  return (
    (isLoading && <Loader />) ||
    (error && !data.length && <Error error={error} />) ||
    (data && !isLoading && (
      <>
        <Styled.CountryWrapper>
          <Styled.NextImage>
            <Image
              src={country?.flag || "https://via.placeholder.com/400x200"}
              alt={country.name}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Styled.NextImage>

          <Styled.CountryInfo elevation={0}>
            <Typography variant="h4" gutterBottom>
              {country.name}
            </Typography>
            <Typography>
              <span style={{ color: `${grey}` }}>Capital: </span>
              {country.capital}
            </Typography>
            <Typography>
              <span style={{ color: `${grey}` }}>Population: </span>
              {country.population?.toLocaleString("en-US")}
            </Typography>

            <Typography>
              <span style={{ color: `${grey}` }}>Currencies: </span>
              {country.currencies?.map((currency: any) => currency.name)}
            </Typography>

            <Typography>
              <span style={{ color: `${grey}` }}>Languages: </span>
              {country.languages?.map((language: any) => language.name)}
            </Typography>
          </Styled.CountryInfo>
        </Styled.CountryWrapper>
        <BorderCountries borders={country.borders || []} />
      </>
    ))
  );
};

export default Country;
