// import logo from './logo.svg';
// import { Fade, Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../styles/location.scss';
import TransparentLogo from '../images/ariaLogoTransparent.png'
import PersonPinIcon from '@mui/icons-material/PersonPin';


function location() {
  return (
    <div className="location-page">

      <header className="location-header">
        <a href="/home" className="logo-link">
        <img className='transparent-logo' src={TransparentLogo} alt="aria germann counseling logo transparent png" />
        </a>
        <Fade>
          <h1 style={{display: "none"}}>location</h1>
          <h1 className='heading-name'>My Office</h1>
          <h2 className="sub-heading">Experience healing with Us</h2>
</Fade>
      </header>
      {/* <section className="location-section-one">
        <div className="come-see-me-box">
          <h1 style={{display:"none"}}>location page</h1>
          <h2 className="sub-heading" style={{ color: '#175676', textAlign: 'center'}}>Charlotte, NC Therapy with Aria: Healing and Growth in the Queen City</h2>
    <a href="#map-container">
          <Fab variant="extended" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
              Map
            </Fab>
          </a>
        </div>
      </section> */}

      <section className="location-section-one">
        <Card className="card-container">
              <CardMedia
            sx={{ height: 240 }}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          My Office
        </Typography>
        <Typography variant="body2" color="text.secondary">
Charlotte, NC Therapy with Aria: Healing and Growth in the Queen City
        </Typography>
      </CardContent>
      <CardActions>
        <a href="#map-container">
          <Fab variant="extended" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
              Map
            </Fab>
          </a>
        <Button size="small">LinkedIn</Button>
      </CardActions>
    </Card>
      </section>

      <section className="location-section-two">
        <div className="address-container">
          <PersonPinIcon className="address-icon"/>
          <div className="address-wrapper">
            <h4>123 positive Ln.</h4>
            <h4>Charlotte, NC 90210</h4>
          </div>
        </div>
        <div className="phone-container">
          < PermPhoneMsgIcon className="phone-icon"/>
          <a href="tel:5555555555">(555) 555-5555</a>
        </div>

      </section>

      <section className="location-section-three">
        <Box className="form">
          <h1>Contact me with your questions!</h1>
          <TextField className="input" id="outlined-basic" label="Name" variant="outlined" />
          <TextField className="input" id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField className="input" id="outlined-basic" label="Email" variant="outlined" />
          <TextField
            className="text-box"
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            placeholder="Let me know what's up?"
          />
        </Box>
      </section>

      <section className="location-section-4">
        <div id="map-container">
        map
        </div>
      </section>
    </div>
  );
}

export default location;
