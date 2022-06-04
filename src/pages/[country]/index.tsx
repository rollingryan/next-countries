import { NextPage } from "next";
import { useRouter } from "next/router";

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
    (isLoading && <FullScreenLoader />) ||
    (error && <Error error={error}></Error>) ||
    (data && <CountryLayout country={data} isLoading={isLoading} />)
  );
};

export default Country;
