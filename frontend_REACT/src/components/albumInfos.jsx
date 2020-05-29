import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
export default function albumInfos({ album, isFromAlbumsPage }) {
  console.log(">>>>> ALBUM INFOS PAGE : ", isFromAlbumsPage);
  var style = {
    background: "blue",
    height: "500px"
  }
  var h2 = {}
  if (isFromAlbumsPage){
    style = {
      
      margin: "0",
      textAlign: "center",
      padding: "1px",
      background: "grey",
      height: "100%",
      color: "white",
      borderRadius: "0"
    }
  
    h2 = {
      background: "#8f8f8f",
      height: "",
      margin: "0"
    }
  }
  
  
  return (
  <Card style={style}>

      <h2 style={h2}>{album.title}</h2>
      <p>Descrption : {album.description}</p>
      <p>Nombre D'images : {album.images_count}</p>
  </Card>
  );
}
