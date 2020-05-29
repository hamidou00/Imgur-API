import React, { Component } from "react";
import handler from "../handlers/apiHandler";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase'
import getUploadedImages from './ImagesList'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import AlbumInfos from './albumInfos';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

//import InfoIcon from '@material-ui/icons/Info';



export default class ImagesList extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        albums: [],
      };
      
  componentDidMount() {
    handler
      .get("/myAlbums")
      .then((apiRes) => {
        this.setState({ albums: apiRes.data.albums  });
      })
      .catch((err) => console.error(err));
  }
  
  
  handleButton(albumID) {
    this.props.history.push("/album/"+albumID)
  }
  render() {
    const albumList = {
        margin: "auto",
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        
        listStyle: "none",
        padding: "0",
        width: "80%"
    }
    const card = {
      background: "green",
      width: "600px",
      marginBottom: "25px"
  }
    const paper = {
        width: "600px",
        background: "purple"
    }

    const image = {
      //background: "blue",
      
    }
    
    return (
      
      <>
      {
        
        this.state.albums.length === 0 ? (
          <div>loading...</div>
        ) : (
            <Box style={albumList}>
                
                {this.state.albums.map((album, i) => (
                <CardActionArea   style={card} key={album.id} onClick={this.handleButton.bind(this,album.id)}>
                {/* <Paper variant="outlined" style={paper}> */}
                    <CardMedia style={image} image={album.cover} title="C UN TITRE" />
                    <AlbumInfos album={album} isFromAlbumsPage={true} />
                {/* </Paper> */}
                </CardActionArea>
                ))}

            </Box>
        )
      
      }
      
      </>   
    );
    
  }

  
}