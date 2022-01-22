import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { AppBar, Container } from '@mui/material';

export default function NavBar() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static" color='primary'>
        <Tabs centered="true" value={value} onChange={handleChange} textColor='inherit'>
          <Tab icon={<PhoneIcon />}   label="ADD A RATE" />
          <Tab icon={<FavoriteIcon />} label="ALL YOUR RATES" />
          <Tab icon={<PersonPinIcon />} label="REMOVE A RATE" />
        </Tabs>
      </AppBar>
    </Container>
  );
}