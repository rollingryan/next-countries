import { memo } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Loader from "../components/Loader";
import Error from "../components/Error";
import CountryCard from "../components/CountryCard";
import * as Styled from "../pageStyles/countriesStyles";
import { useGetCountriesQuery } from "../app/store/api/apiSlice";

const AllCountries: NextPage<NextPage> = () => {
  const router = useRouter();
  const { data, isLoading, isError, error } = useGetCountriesQuery("");

  return (
    (isLoading && <Loader />) ||
    (isError && <Error error={error} />) || (
      <Styled.CountriesWrap data-cy="countries-wrap">
        {data?.map((country: any) => (
          <CountryCard
            key={country.alpha2Code}
            name={country.name}
            population={country.population}
            flag={country.flag}
            capital={country.capital}
            onClick={() => router.push(`/${country.alpha2Code.toLowerCase()}`)}
          />
        ))}
      </Styled.CountriesWrap>
    )
  );
};

export default memo(AllCountries);
