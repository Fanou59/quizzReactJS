import { Progress } from "@material-tailwind/react";

export const ProgressBar = ({ value, max }) => {
  return <Progress value={value} max={max} color="lime" />;
};
