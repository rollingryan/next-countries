import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

import Loader from "../components/Loader";
import Error from "../components/Error";
import * as Styled from "../pageStyles/countryStyles";
import BorderCountries from "../components/BorderCountries";
import theme from "../app/theme";
import { useGetCountryQuery } from "../app/store/api/apiSlice";

const Country: NextPage = () => {
  const router = useRouter();
  const countryCode = router.query.country;
  // @ts-ignore
  const { data, isLoading, isError, error } = useGetCountryQuery(countryCode);

  const grey = theme.palette.text.disabled;

  return (
    (isLoading && <Loader />) ||
    (isError && <Error error={error.toString()} />) ||
    (data && !isLoading && (
      <>
        <Styled.CountryWrapper>
          <Styled.NextImage>
            <Image
              src={data.flag || "https://via.placeholder.com/400x200"}
              alt={data.name}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Styled.NextImage>

          <Styled.CountryInfo elevation={0}>
            <Typography variant="h4" gutterBottom>
              {data.name}
            </Typography>
            <Typography>
              <span style={{ color: `${grey}` }}>Capital: </span>
              {data.capital}
            </Typography>
            <Typography>
              <span style={{ color: `${grey}` }}>Population: </span>
              {data.population?.toLocaleString("en-US")}
            </Typography>

            <Typography>
              <span style={{ color: `${grey}` }}>Currencies: </span>
              {data.currencies?.map((currency: any) => currency.name)}
            </Typography>

            <Typography>
              <span style={{ color: `${grey}` }}>Languages: </span>
              {data.languages?.map((language: any) => language.name)}
            </Typography>
          </Styled.CountryInfo>
        </Styled.CountryWrapper>
        <BorderCountries borders={data.borders || []} />
      </>
    ))
  );
};

export default Country;
