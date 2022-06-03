import { NextPage } from "next";
import { Typography } from "@mui/material";

import Layout from "../components/Layout/Layout";

const AllCountries: NextPage<NextPage> = () => (
  <Layout>
    <Typography variant="h1">Golden</Typography>
  </Layout>
);

export default AllCountries;
