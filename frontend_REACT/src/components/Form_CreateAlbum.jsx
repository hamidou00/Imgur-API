import React from 'react';
import axios from '../../../hamidou-backend/node_modules/axios';


//MaterialUi Compenents
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

export default class Form_CreateAlbum extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      description: '',
  };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
      console.log("HAHA")
    this.setState({title: event.target.value});  
  }

  handleDescChange(event) {
    console.log("HOHO")
    this.setState({description: event.target.value});
  }


  handleSubmit(event) {
    console.log("huhuhuhuhu")
    const formData = new FormData();

    formData.append('title', this.state.title)
    formData.append('description', this.state.description)
    
    console.log(formData.get('title'))
    console.log(formData.get('description'))

    axios({
      url: "https://api.imgur.com/3/album",
      method: "POST",
      headers: {
        authorization: "Client-ID 7da9bb1acfc6b08",
        authorization: "Bearer b5a7ff37e3ca82357591a4b99dfb9cf3a31cd6a6"
      },
      data: formData
      
    }).then(res =>{
      alert("Album Crée : Lien > ")
    }).catch(err => console.log(err))
    event.preventDefault();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <Box display="flex" flexDirection="column" justifyContent="space-around" alignItems="center" margin="50px" height="500px">
            
            <TextField value={this.state.value} name="title" onChange={this.handleTitleChange} label="Nom Album" variant="outlined"/>
            <TextField value={this.state.value} name="description" onChange={this.handleDescChange} label="Description" variant="filled" multiline
            rows={5}/>
            {/* <input type="file" accept="image/png, image/jpeg" name="image" onChange={this.handleFile}/> */}
            

            <Button variant="contained" color="primary" type="submit">Créer</Button>
        </Box>
      </form>
    );
  }
}