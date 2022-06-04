import { Skeleton, Typography } from "@mui/material";
import Case from "case";
import { useRouter } from "next/router";
import useApiRequest from "../../app/hooks/useApiRequest";
import CountryCard from "../CountryCard";

import * as Styled from "./styles";

interface Props {
  borders: string[];
}

const BorderCountries: React.FC<Props> = ({ borders }) => {
  const router = useRouter();
  const url = `https://restcountries.com/v2/alpha?codes=${borders?.join()}&fields=name,flag,population,capital,alpha2Code`;
  const { data, error, isLoading } = useApiRequest(url);
  const containerLength = borders.length * 110;

  return (
    (isLoading && <Skeleton height="5rem" />) || (
      <>
        <Styled.Heading variant="h4" gutterBottom>
          <span className="heading--first">Border</span>
          <span className="heading--second">Countries</span>
        </Styled.Heading>

        <Styled.BordersWrap elevation={0}>
          {error && (
            <Typography sx={{ padding: "1rem" }} variant="h6">
              This country is an island &#127965;&#65039;
            </Typography>
          )}
          {data.length > 0 && (
            <Styled.ScrollWrap>
              <Styled.InnerWrap containerLength={containerLength}>
                {data?.map((country: any) => (
                  <CountryCard
                    className="border-country"
                    key={country.alpha2Code}
                    name={country.name}
                    flag={country.flag}
                    population={country.population}
                    capital={country.capital}
                    onClick={() =>
                      router.push(`/${Case.lower(country.alpha2Code)}`)
                    }
                  />
                ))}
              </Styled.InnerWrap>
            </Styled.ScrollWrap>
          )}
        </Styled.BordersWrap>
      </>
    )
  );
};

export default BorderCountries;
