import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { LikertScale } from "./LikertScale";

export const QuestionBox = () => {
  return (
    <Box
      sx={{
        width: "55%",
        borderRadius: "30px",
        backgroundColor: "primary.main",

      }}
    >
      <Box sx={{ paddingX: 10, paddingY: 7 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Rasa",
            fontWeight: "bold",
            color: "text.secondary",
          }}
        >
          During the past 2 weeks
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Rasa", fontWeight: "bold" }}
        >
          I have been eating and drinking healthily
        </Typography>
      </Box>
      <LikertScale/>
    </Box>
  );
};
