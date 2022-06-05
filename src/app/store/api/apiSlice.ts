import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "data",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v2/" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () =>
        "all?fields=name,flag,population,capital,alpha2Code,currencies,languages,borders",
    }),
    getBorderCountries: builder.query({
      query: (countryCodes) =>
        `alpha?codes=${countryCodes?.join()}&fields=name,flag,population,capital,alpha2Code`,
    }),
    getCountry: builder.query({
      query: (countryCode) =>
        `alpha/${countryCode}?fields=name,flag,population,capital,alpha2Code,currencies,languages,borders`,
    }),
  }),
});

// Export the auto-generated hook for the `getCountries` query endpoint
export const {
  useGetCountriesQuery,
  useGetBorderCountriesQuery,
  useGetCountryQuery,
} = apiSlice;
