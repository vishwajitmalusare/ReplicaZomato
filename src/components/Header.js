import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';

export default function HeaderElement() {

  return (
    <div className = "banner" >

      <div>
        <MobileScreenShareIcon className = "headerGetAppIcon"/>
        <Link className = "headerGetApp"> Get the App </Link>
        <Link className = "headerLogin" to="/login" >Login</Link>
        <Link className = "headerSignUp" >Sign Up</Link>
      
      </div>

      <h1 className = "headerTitle" >
        Dyniz
      </h1>
      <h3 className = "headerTitleText" >
        No Wait. Meal Set. 
      </h3>
      
      <div className = "search" >
        <LocationOnIcon color="secondary" />
        <InputBase 
          placeholder="Location"
          className = "locationBar"
        />
        <SearchIcon/>
        <InputBase
          placeholder="Search…"
          classes={{
          root: "inputRoot",
          input: "inputInput",
            }}
        />
      </div>
    </div>
  );
}
