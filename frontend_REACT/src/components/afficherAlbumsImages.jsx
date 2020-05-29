import React from "react";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default function afficherAlbumsImages({ images }) {
    return (
    <>
    
        {
            //console.log(">>>props",images);
            
            images.map((image) => (
                <img src={image.link}/>
            ))

            //description - name - type - views -
        }
    </>
  );
}
