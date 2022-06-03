import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

import Layout from "../../components/Layout";
import FullScreenLoader from "../../components/Loader";
import Error from "../../components/Error";
import * as Styled from "../../pageStyles/countryStyles";

type Name = {
  name: string;
};

interface Currency extends Name {}

interface Language extends Name {}

const Country: NextPage<NextPage> = () => {
  const router = useRouter();
  const countryCode = router.query.country;
  const [countryData, setCountryData] = useState<any>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const url = `https://restcountries.com/v2/alpha/${countryCode}?fields=name,flag,population,capital,currencies,languages,borders`;

  if (!countryData) {
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setCountryData(response.data);
        } else {
          setError("Oops! Something went wrong.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(`Oops! Something went wrong. - ${error.message}`);
        setLoading(false);
      });
  }

  return (
    <Layout>
      {(loading && <FullScreenLoader />) ||
        (error && <Error error={error}></Error>) ||
        (countryData && (
          <>
            <Styled.NextImage>
              <Image
                src={countryData?.flag}
                alt={countryData?.name}
                layout="fill"
                objectFit="cover"
              />
            </Styled.NextImage>
            <Typography variant="h4">Name: {countryData?.name}</Typography>
            <Typography>Capital City: {countryData?.capital}</Typography>
            <Typography>Population: {countryData?.population}</Typography>
            <Typography>
              {`Currencies: ${countryData?.currencies.map(
                (currency: Currency) => currency.name
              )}`}
            </Typography>
            <Typography>{`Languages: ${countryData?.languages.map(
              (language: Language) => language.name
            )}`}</Typography>
            <Typography>{`Borders: ${countryData?.borders.map(
              (border: string) => ` ${border}`
            )}`}</Typography>
          </>
        ))}
    </Layout>
  );
};

export default Country;
