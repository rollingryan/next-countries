import axios from "axios";
import { useState } from "react";
import { NextPage } from "next";

import Layout from "../components/Layout";
import FullScreenLoader from "../components/Loader";
import Error from "../components/Error";

const AllCountries: NextPage<NextPage> = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const url =
    "https://restcountries.com/v2/all?fields=name,flag,population,langues";

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
        countries?.map((country) => <CountryCard country={country} />)}
    </Layout>
  );
};

export default AllCountries;
