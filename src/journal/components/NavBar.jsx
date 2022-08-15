import { useDispatch } from "react-redux"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { starLogout } from "../../store/auth"

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(starLogout());
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 3, display: { sm: 'none', } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap>JournalApp</Typography>

          <IconButton
            color='error'
            onClick={onLogout}
          >
            <LogoutOutlined />
          </IconButton>

        </Grid>
      </Toolbar>


    </AppBar>
  )

}