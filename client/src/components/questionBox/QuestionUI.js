import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const QuestionUI = () => {
  return (
    <Box sx={{ paddingX: 10, paddingY: 7 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", fontFamily: "Rasa", color: "text.secondary" }}
      >
        During the past 2 weeks
      </Typography>
      <Typography variant="h4" sx={{ fontFamily: "Rasa", fontWeight: "bold" }}>
        I have been eating and drinking healthily
      </Typography>
    </Box>
  );
};
