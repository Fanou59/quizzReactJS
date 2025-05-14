import { Typography } from "@material-tailwind/react";
import { Progress } from "@material-tailwind/react";

export const ProgressBar = ({ value }) => {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6">
          {value}%
        </Typography>
        <Typography color="white" variant="h6">
          Completed
        </Typography>
      </div>
      <Progress value={value} color="lime" size="lg" />
    </div>
  );
};
