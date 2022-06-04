import { Typography } from "@mui/material";

interface Props {
  borders: string[];
}

const BorderCountries: React.FC<Props> = ({ borders }) => {
  return (
    (borders.length > 0 && (
      <Typography>{`Borders: ${borders.map(
        (border: string) => ` ${border}`
      )}`}</Typography>
    )) || <Typography>This country is an island &#127965;&#65039;</Typography>
  );
};

export default BorderCountries;
