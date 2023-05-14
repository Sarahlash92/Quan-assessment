import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { RadioButton } from "./RadioIcon";

/* importing a 
customized Radio Icon 
found it on Sandbox*/

export const LikertScale = () => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <RadioGroup
        sx={{
          justifyContent: "space-between",
          marginX: 0,
          marginY: 4,
          p: 0,
          color: "primary.light",
        }}
        row
        aria-labelledby="likert-scale"
        name="likert-scale"
      >
        <FormControlLabel
          labelPlacement="bottom"
          value="1"
          control={
            <Radio
              icon={<RadioButton />}
              checkedIcon={<RadioButton checked />}
              inputProps={{ "aria-label": "Never" }}
            />
          }
          label="Never"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value="2"
          control={
            <Radio
              icon={<RadioButton />}
              checkedIcon={<RadioButton checked />}
              inputProps={{ "aria-label": "Rarely" }}
            />
          }
          label="Rarely"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value="3"
          control={
            <Radio
              icon={<RadioButton />}
              checkedIcon={<RadioButton checked />}
              inputProps={{ "aria-label": "Occasionally" }}
            />
          }
          label="Occasionally"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value="4"
          control={
            <Radio
              icon={<RadioButton />}
              checkedIcon={<RadioButton checked />}
              inputProps={{ "aria-label": "Sometimes" }}
            />
          }
          label="Sometimes"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value="5"
          control={
            <Radio
              icon={<RadioButton />}
              checkedIcon={<RadioButton checked />}
              inputProps={{ "aria-label": "Frequently" }}
            />
          }
          label="Frequently"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value="6"
          control={
            <Radio
              icon={<RadioButton />}
              checkedIcon={<RadioButton checked />}
              inputProps={{ "aria-label": "Usually" }}
            />
          }
          label="Usually"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value="7"
          control={
            <Radio
              icon={<RadioButton />}
              checkedIcon={<RadioButton checked />}
              inputProps={{ "aria-label": "Always" }}
            />
          }
          label="Always"
        />
      </RadioGroup>
    </FormControl>
  );
};
