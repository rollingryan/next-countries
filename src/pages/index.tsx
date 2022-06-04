import Case from "case";
import { NextPage } from "next";
import { useRouter } from "next/router";

import FullScreenLoader from "../components/Loader";
import Error from "../components/Error";
import CountryCard from "../components/CountryCard";
import useApiRequest from "../app/hooks/useApiRequest";

const AllCountries: NextPage<NextPage> = () => {
  const router = useRouter();
  const url =
    "https://restcountries.com/v2/all?fields=name,flag,population,capital,alpha2Code";
  const { data, error, isLoading } = useApiRequest(url);

  return (
    (isLoading && <FullScreenLoader />) ||
    (error && <Error error={error}></Error>) ||
    data?.map((country: any) => (
      <CountryCard
        key={Case.kebab(country.name)}
        name={country.name}
        population={country.population}
        flag={country.flag}
        capital={country.capital}
        onClick={() => router.push(`/${Case.lower(country.alpha2Code)}`)}
      />
    ))
  );
};

export default AllCountries;
