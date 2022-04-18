import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [
    {
        name: 'Cases by timeline',
        url: '/cases-by-timeline'
    },
    {
        name: 'Statewise',
        url: '/statewise'
    },
    {
        name: 'Tested',
        url: '/tested'
    },];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" >
            <Container maxWidth="xxl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a style={{ textDecoration: 'none' }} href="/">
                        <Typography sx={{ textTransform: 'capitalize', fontSize: '25px', fontWeight: '700',color:'white' }}>Covid Tracker</Typography>
                    </a>
                <Toolbar disableGutters sx={{ float: 'right', mr: 4 }}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton sx={{ paddingRight: 0 }}
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ paddingRight: 0 }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem>
                                    <a href={page.url} key={page.url}
                                            onClick={handleCloseNavMenu}
                                            style={{ my: 2, color: 'black', display: 'block', textTransform: 'none',textDecoration:'none' }}
                                        >
                                           <Typography> {page.name}</Typography>
                                    </a>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <a href={page.url} key={page.url} style={{textDecoration:'none'}}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    style={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
                                >
                                    {page.name}
                                </Button>
                            </a>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Header;