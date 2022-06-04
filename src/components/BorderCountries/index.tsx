import { Typography } from "@mui/material";

interface Props {
  borders: string[];
}

const BorderCountries: React.FC<Props> = ({ borders }) => (
  <Typography>{`Borders: ${borders.map(
    (border: string) => ` ${border}`
  )}`}</Typography>
);

export default BorderCountries;
