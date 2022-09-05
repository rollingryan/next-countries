import { Typography } from "@mui/material";
import { useRouter } from "next/router";

import * as Styled from "./styles";
import CountryCard from "../CountryCard";
import Loader from "../Loader";
import { useGetBorderCountriesQuery } from "../../app/store/api/apiSlice";

interface Props {
  borders: string[];
}

const BorderCountries: React.FC<Props> = ({ borders }) => {
  const router = useRouter();
  // @ts-ignore
  const { data, isLoading, isError } = useGetBorderCountriesQuery(borders);
  const containerLength = borders.length * 120;

  return (
    <>
      <Styled.Heading
        variant="h4"
        gutterBottom
        data-cy="border-countries__heading"
      >
        <span className="heading--first">Border</span>
        <span className="heading--second">Countries</span>
      </Styled.Heading>

      <Styled.BordersWrap
        elevation={(isError && 1) || 0}
        data-cy="border-countries__wrap"
      >
        {(isLoading && <Loader contained />) ||
          (isError && (
            <Typography
              sx={{ padding: "1rem" }}
              variant="h6"
              data-cy="border-countries__island"
            >
              This country is an island &#127965;&#65039;
            </Typography>
          )) || (
            <Styled.ScrollWrap>
              <Styled.InnerWrap
                containerLength={containerLength}
                data-cy="border-countries__wrap--inner"
              >
                {data?.map((country: any) => (
                  <CountryCard
                    className="border-country"
                    key={country.alpha2Code}
                    name={country.name}
                    flag={country.flag}
                    population={country.population}
                    capital={country.capital}
                    onClick={() =>
                      router.push(`/${country.alpha2Code.toLowerCase()}`)
                    }
                  />
                ))}
              </Styled.InnerWrap>
            </Styled.ScrollWrap>
          )}
      </Styled.BordersWrap>
    </>
  );
};

export default BorderCountries;
