import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router';

const drawerWidth = 240;

const MainContainer = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${drawerWidth}px`,
            variants: [
                  {
                        props: ({ open }) => open,
                        style: {
                              transition: theme.transitions.create('margin', {
                                    easing: theme.transitions.easing.easeOut,
                                    duration: theme.transitions.duration.enteringScreen,
                              }),
                              marginLeft: 0,
                        },
                  },
            ],
      }),
);



const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
}));

export default function Main() {
      const theme = useTheme();
      const [open, setOpen] = React.useState(false);

      const handleDrawerOpen = () => {
            setOpen(true);
      };

      const handleDrawerClose = () => {
            setOpen(false);
      };

      return (
            <Box sx={{ display: 'flex' }}>
                  <CssBaseline />
                  <Header open={open} handleDrawerOpen={handleDrawerOpen} />
                  <Drawer
                        sx={{
                              width: drawerWidth,
                              flexShrink: 0,
                              '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    boxSizing: 'border-box',
                              },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                  >
                        <DrawerHeader>
                              <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                              </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <Sidebar />


                  </Drawer>
                  <MainContainer open={open} sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
                        <DrawerHeader />
                        <Outlet />
                  </MainContainer>
            </Box>
      );
}
