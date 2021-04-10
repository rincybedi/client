import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SearchHeader = () => {
  const [drp1, setDrp1] = React.useState('');
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const handleChange = (event) => {
    setDrp1(event.target.value);
  };

  const classes = useStyles();

  return (
    <div id='searchHeader'>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Value1</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={drp1}
            onChange={handleChange}
          >
            <MenuItem value={1}>test1</MenuItem>
            <MenuItem value={2}>test2</MenuItem>
            <MenuItem value={3}>test3</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Value2</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={drp1}
            onChange={handleChange}
          >
            <MenuItem value={1}>test1</MenuItem>
            <MenuItem value={2}>test2</MenuItem>
            <MenuItem value={3}>test3</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Value3</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={drp1}
            onChange={handleChange}
          >
            <MenuItem value={1}>test1</MenuItem>
            <MenuItem value={2}>test2</MenuItem>
            <MenuItem value={3}>test3</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Value4</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={drp1}
            onChange={handleChange}
          >
            <MenuItem value={1}>test1</MenuItem>
            <MenuItem value={2}>test2</MenuItem>
            <MenuItem value={3}>test3</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Value5</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={drp1}
            onChange={handleChange}
          >
            <MenuItem value={1}>test1</MenuItem>
            <MenuItem value={2}>test2</MenuItem>
            <MenuItem value={3}>test3</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SearchHeader;
