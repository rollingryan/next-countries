import Case from "case";
import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import FullScreenLoader from "../components/Loader";
import Error from "../components/Error";
import CountryCard from "../components/CountryCard";

const AllCountries: NextPage<NextPage> = () => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const url =
    "https://restcountries.com/v2/all?fields=name,flag,population,capital,alpha2Code";

  if (countries.length === 0) {
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setCountries(response.data);
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
        countries?.map((country: any) => (
          <CountryCard
            key={Case.kebab(country.name)}
            name={country.name}
            population={country.population}
            flag={country.flag}
            capital={country.capital}
            onClick={() => router.push(`/${Case.lower(country.alpha2Code)}`)}
          />
        ))}
    </Layout>
  );
};

export default AllCountries;
