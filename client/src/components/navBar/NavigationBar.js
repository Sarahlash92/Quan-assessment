import { AppBar, IconButton, Toolbar, Button } from "@mui/material";
import { ReactComponent as Logo } from "../../quan-logo.svg";

export const NavigationBar = () => {
  return (
    <AppBar position="static">
    <Toolbar sx={{ justifyContent: "space-between", bgcolor: 'primary.main'}}>
      <IconButton size='small' edge='start' aria-label='quan-Logo'>
        <Logo />
      </IconButton>
              <Button color="secondary" variant="text">LOGOUT</Button>
    </Toolbar>
  </AppBar>
  ) 
}