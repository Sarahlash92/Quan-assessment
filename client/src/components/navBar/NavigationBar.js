import { AppBar, IconButton, Toolbar, Button } from "@mui/material";
import { ReactComponent as Logo } from "../../quan-logo.svg";
import { StepperNav} from './Stepper';


export const NavigationBar = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{ justifyContent: "space-between", bgcolor: "primary.main" }}
      >
        <IconButton size="small" edge="start" aria-label="quan-Logo">
          <Logo />
        </IconButton>
        <StepperNav />
        <Button color="secondary" variant="text">
          LOGOUT
        </Button>
      </Toolbar>
    </AppBar>
  );
};
