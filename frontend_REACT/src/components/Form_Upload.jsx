import React from 'react';
import axios from '../../../hamidou-backend/node_modules/axios';

export default class Form_Upload extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      files: ''
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});  
  }

  handleFile(event) {
    let file = event.target.files[0];
    console.log(file)
    this.setState({files: file});  
  }

  handleSubmit(event) {
    const formData = new FormData();

    formData.append('image', this.state.files)
    formData.append('title', this.state.title)
    

    axios({
      url: "https://api.imgur.com/3/image",
      method: "POST",
      headers: {
        authorization: "Client-ID 7da9bb1acfc6b08",
      },

      data: formData
      
    }).then(res =>{
      alert("Fichier Uploadé. Lien : ", res.data.data.link)
      console.log(res.data.data.link);
    })
    .catch(err => console.log(err))
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <label> Nom : </label>
        <input type="text" value={this.state.value} name="title" onChange={this.handleChange} />

        <label> Selectionner Image : </label>
        {<input type="file" accept="image/png, image/jpeg" name="image" onChange={this.handleFile}/>}

        <button>upload</button>
      </form>
    );
  }
}

/*
image : base64
title: title image
name: pixel.gif
type: url


*/