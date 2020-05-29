import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
  root: {
    width: '100vw',
    backgroundColor:'rgba(0, 0, 0, 0)'
  },
});

function NavBar({ setToggleAddForm }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  return (
    <div className='sticky-footer'>
      <div className='center'>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label='Home'
            icon={
              <a href=''>
                <HomeIcon color='primary'/>
              </a>
            }
          />
          <BottomNavigationAction
            onClick={() => setToggleAddForm(true)}
            label='Add Todo'
            icon={<AddIcon fontSize='large' />}
          />
          <BottomNavigationAction
            label='Sign Out'
            onClick={() => {
              console.log('sign out button is clicked');
              localStorage.clear();
              history.push('/login');
            }}
            icon={<ExitToAppIcon />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}

export default NavBar;
