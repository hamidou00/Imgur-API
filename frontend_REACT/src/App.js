import React from 'react';
import GalleriesList from './components/GalleriesList';
import Navigation from './components/navigation';
import Form_Upload from './components/Form_Upload';
import Form_CreateAlbum from './components/Form_CreateAlbum';
import AlbumsList from './components/AlbumsList';
import getUploadedImages from './components/ImagesList';
import Album from './components/album';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
   <>
    <Router>
    <Navigation />
    <Route exact path="/" component={GalleriesList} />
    <Route path="/myImages" component={getUploadedImages} />
    <Route path="/myAlbums" component={AlbumsList} />
    <Route path="/upload" component={Form_Upload} />
    <Route path="/create_album" component={Form_CreateAlbum} />
    <Route path="/album/:id" component={Album} />
    </Router>
   </>
  );
}

export default App;
