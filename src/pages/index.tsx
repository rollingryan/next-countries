import Case from "case";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Loader from "../components/Loader";
import Error from "../components/Error";
import CountryCard from "../components/CountryCard";
import * as Styled from "../pageStyles/countriesStyles";
import { useGetCountriesQuery } from "../app/store/api/apiSlice";

const AllCountries: NextPage<NextPage> = () => {
  const router = useRouter();
  // @ts-ignore
  const { data, isLoading, isError, error } = useGetCountriesQuery();

  return (
    (isLoading && <Loader />) ||
    (isError && <Error error={error.toString()} />) || (
      <Styled.CountriesWrap>
        {data?.map((country: any) => (
          <CountryCard
            key={country.alpha2Code}
            name={country.name}
            population={country.population}
            flag={country.flag}
            capital={country.capital}
            onClick={() => router.push(`/${Case.lower(country.alpha2Code)}`)}
          />
        ))}
      </Styled.CountriesWrap>
    )
  );
};

export default AllCountries;
