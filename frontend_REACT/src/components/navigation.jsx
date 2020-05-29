import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const NavBar = () => {
    const style = {
        textDecoration: 'none', 
        color:'white'
    }
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography >
                    Imgur-API
                </Typography>
                
                <Box>
                    <ListItem >
                    <Button> <Link to="/" style={style}>Home</Link> </Button>
                    <Button> <Link to="/myImages" style={style}>My Images</Link> </Button>
                    <Button> <Link to="/myAlbums" style={style}>My Albums</Link> </Button>
                    <Button> <Link to="/upload" style={style}>Upload</Link> </Button>
                    <Button> <Link to="/create_album" style={style}>Create Album</Link> </Button>
                        <Button>NAV-NAV</Button>
                    </ListItem>
                </Box>


            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar