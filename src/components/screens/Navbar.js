import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { a, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import SearchHeader from './SearchHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function Header() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  //   return (
  //     <div className={classes.root}>
  //       <List dense={dense}>
  //         {generate(
  //           <ListItem>
  //             <ListItemText
  //               primary='a'
  //               secondary={secondary ? 'Secondary text' : null}
  //             />
  //           </ListItem>
  //         )}
  //       </List>
  //     </div>
  //   );

  return (
    <div id="divHeaderContainer">
      <nav>
        <div className='nav-wrapper'>
          <ul style={{ display: 'inline-block', float: 'left' }}>
            <li key='1'>
              <a to='/profile'>Test1</a>
            </li>

            <li key='2'>
              <a to='/create'> Test2</a>
            </li>
            <li key='3'>
              <a to='/create'> Test3</a>
            </li>
            <li key='4'>
              <a to='/create'> Test4</a>
            </li>
          </ul>

          <div id='header'>KRETZ</div>
        </div>
      </nav>

      <SearchHeader></SearchHeader>
    </div>
  );
}
