import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
    left: "calc(-50% + 11px)",
    right: "calc(50% + 11px)",
    zIndex: 0,
  },

  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 2,
    backgroundColor: "#362a51",
    borderRadius: 1,
    zIndex: 0,
  },
}));

const StepIconRoot = styled("div")(({ theme, ownerState }) => ({
  "& .StepIcon-completedIcon": {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: "#ffcd35",
    border: "2px solid #362a51",
    zIndex: 2,
  },
  "& .StepIcon-circle": {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: "#130a29",
    border: "2px solid #362a51",
    zIndex: 2,
  },
}));

function StepIcon(props) {
  const { active, completed, className } = props;

  return (
    <StepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="StepIcon-completedIcon" />
      ) : (
        <div className="StepIcon-circle" />
      )}
    </StepIconRoot>
  );
}

/* this could be done in a betterway */ 

const GeneralButton = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="IN GENERAL"
        size="small"
        sx={{
          fontFamily: "Arial",
          color: "primary.main",
          backgroundColor: "white",
          zIndex: "1",
        }}
      />
    </Stack>
  );
};

export const StepperNav = () => {
  return (
    <Box sx={{ width: "10%" }}>
      <Stepper
        color="text.secondary"
        activeStep={2}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        <Step>
          <StepLabel StepIconComponent={()=> <GeneralButton/>}></StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={StepIcon}></StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={StepIcon}></StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={StepIcon}></StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
};
