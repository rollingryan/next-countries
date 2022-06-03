import { NextPage } from "next";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

import Layout from "../../components/Layout";

const Country: NextPage<NextPage> = () => {
  const router = useRouter();
  const country = router.query.country as string;

  return (
    <Layout>
      <Typography variant="h1">{country} - country</Typography>
    </Layout>
  );
};

export default Country;
