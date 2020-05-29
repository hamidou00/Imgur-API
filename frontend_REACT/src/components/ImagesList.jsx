import React, { Component } from "react";
import handler from "../handlers/apiHandler";
import TagsList from "./TagsList";
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';



export default class ImagesList extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    handler
      .get("/myImages")
      .then((apiRes) => {
        this.setState({ images: apiRes.data.images  });
      })
      .catch((err) => console.error(err));
  }

  render() {
    
    return (
      
      <>
      {
        
        
        this.state.images.length === 0 ? (
          <div>loading...</div>
        ) : (
          <ul className={this.useStyles().root}>

              {this.state.images.map((img, i) => (
                  <li key={img.id}>
                    <h2 className="title">{img.title}</h2>
                    <img classe="gallery_images" src={img.link} alt="truc de foo"/>
                    { Array.isArray(img.tags) && <TagsList tags={img.tags} /> }
                  </li>
              ))}
          </ul>
        )
        
      }
      
      </>   
    );
  }

  useStyles()  {
     return  makeStyles((theme) => ({
        root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 500,
        height: 450,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },

      gallery_images: {
        backgroundSize: "100%"
      }
    }))
  }
}