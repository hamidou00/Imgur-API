import React, { Component } from "react";
import handler from "./../handlers/apiHandler";
import TagsList from "./TagsList";
import "./../styles/gallery-list.css";
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';



export default class ImagesList extends Component {
  state = {
    galleries: [],
  };

  componentDidMount() {
    handler
      .get("/galleries")
      .then((apiRes) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>", apiRes);
        this.setState({ galleries: apiRes.data.galleries  });
      })
      .catch((err) => console.error(err));
  }

  render() {
    
    return (
      
      <>
      {
        
        this.state.galleries.length === 0 ? (
          <div>loading...</div>
        ) : (
          <ul className={this.useStyles().root}>
            <GridList cellHeight={180} className={this.useStyles().gridList}>

              {this.state.galleries.map((gallery, i) => (
                <GridListTile key={gallery.img}>
                  <li key={gallery.id}>
                    <h2 className="title">{gallery.title}</h2>
                    <img classe="gallery_images" src={gallery.link} alt="truc de foo"/>
                    { Array.isArray(gallery.tags) && <TagsList tags={gallery.tags} /> }
                    <Button variant="contained" color="primary">Hello World</Button>
                  </li>
                </GridListTile>
              ))}

            </GridList>
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



/*
return (
  <>
  {
    
    this.state.galleries.length === 0 ? (
      <div>loading...</div>
    ) : (
      <ul>
        {this.state.galleries.map((gallery, i) => (
          <li key={gallery.id}>
            <h2 className="title">{gallery.title}</h2>
            <img src={gallery.link} alt="truc de foo"/>
            { Array.isArray(gallery.tags) && <TagsList tags={gallery.tags} /> }
            <Button variant="contained" color="primary">Hello World</Button>
          </li>
        ))}
      </ul>
    )
  
  }
  
  </>   
);
*/
