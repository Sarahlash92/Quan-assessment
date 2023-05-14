import Box from "@mui/material/Box";
import { LikertScale } from "./LikertScale";
import { QuestionUI } from "./QuestionUI";

export const QuestionBox = () => {
  return (
    <Box
      sx={{
        width: "55%",
        borderRadius: "30px",
        backgroundColor: "primary.main",
        boxShadow: 5
      }}
    >
      <QuestionUI />
      <LikertScale />
    </Box>
  );
};
