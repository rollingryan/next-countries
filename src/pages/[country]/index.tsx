import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

import Layout from "../../components/Layout";
import FullScreenLoader from "../../components/Loader";
import Error from "../../components/Error";
import useApiRequest from "../../app/hooks/useApiRequest";
import CountryLayout from "../../components/CountryLayout";

type Name = {
  name: string;
};

interface Currency extends Name {}

interface Language extends Name {}

const Country: NextPage<NextPage> = () => {
  const router = useRouter();
  const countryCode = router.query.country;
  const url = `https://restcountries.com/v2/alpha/${countryCode}?fields=name,flag,population,capital,currencies,languages,borders`;
  const { data, error, isLoading } = useApiRequest(url);

  return (
    <Layout>
      {(isLoading && <FullScreenLoader />) ||
        (error && <Error error={error}></Error>) ||
        (data && <CountryLayout country={data} isLoading={isLoading} />)}
    </Layout>
  );
};

export default Country;
