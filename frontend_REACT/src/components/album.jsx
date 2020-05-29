import React, { Component } from "react";
import handler from "../handlers/apiHandler";
import AlbumInfos from "./albumInfos";
import ImageList from "./afficherAlbumsImages";
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';



export default class Album extends Component {
    state = {
        album: null,
    };

    componentDidMount() {
        handler
            .get("/album/" + this.props.match.params.id)
            .then((apiRes) => {
                this.setState({ album: apiRes.data.album });
            })
            .catch((err) => console.error(err));
    }

    render() {
        const box = {
            margin: "auto",
            marginTop: "50px",
            padding: '1px',
            background: "yellow",
            width: "80%",
            display: "flex",
            flexDirection: "row"
            
            //height: "500px"
        }

        const leftSection = {
            display: "flex",
            flexDirection: "column",
            background: "geen",
            width: "70%"
        }

        const rightSection = {
            display: "flex",
            flexDirection: "column",
            background: "pink",
            width: "30%"
        }

        const options = {
            margin: "0px",
            height: "250px",
            width: "100%"
        }

        const imageList = {
            marginTop: "50px",
            height: "450px",
            width: "100%"
        }

        const paper = {
            margin: "0px",
            height: "200px"
            // padding: theme.spacing(2),
            // textAlign: 'center',
            // color: theme.palette.text.secondary,
        }
        return (

            <>
            {
        
            this.state.album == null ? (
            <div>loading...</div>
            ) 
            
            : //##########################################################################################
            
            (
                <Box style={box} >
                <Box style={leftSection}>
                    
                            <Paper style={paper}> <AlbumInfos album={this.state.album} /> </Paper>
                            <Paper style={imageList}>IMAGE LIST<ImageList images={this.state.album.images} /></Paper>
                        
                    
                </Box>
                <Box style={rightSection}>
                <Paper style={options}><h4>OPTIONS</h4></Paper>
                        
                    
                </Box>
        
                
                </Box>
            )
      
            }
            </>
        );
    }
}






{/* <Grid container spacing={0} >
                    <Grid item xs={8} >
                            <Paper style={paper}> <AlbumInfos album={this.state.album} /> </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper style={options}><h4>OPTIONS</h4></Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper style={imageList}>IMAGE LIST<ImageList images={this.state.album.images} /></Paper>
                    </Grid>
        
        
                </Grid> */}