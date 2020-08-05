import React, { useState } from 'react';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CellButton from '../components/UI/CellButton';
import BackspaceIcon from '@material-ui/icons/Backspace';
import ClearIcon from '@material-ui/icons/Clear';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f57f17',
      },
      secondary: {
        main: '#fbc02d',
      },
    },
  });


const useStyles = makeStyles((theme) => ({
    root: {
        width: '701px',
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        'max-width': '500px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: 'linear-gradient(#f57f17, #f9a825)',
        color: theme.palette.text.secondary,
    },
    phone: {
        background: 'linear-gradient(#2c387e, #6573c3)',
        'border-radius': '20px',
    },
    numInput: {
        display: 'none',
    },
    textFieldInput: {
        width: '100%',
    },
    cellDisplay: {
        height: '30px',
    },
    '@media only screen and (max-width: 700px)': {
        key: {
            display: 'none',
        },
        numInput: {
            display: 'block',
        },
    },
}));

const Cellphone = (props) => {
    const [inputValues, setInputValues] = useState({ val: '' });
    const [useDictionary, setUseDictionary] = useState({ enabled: false });

    const addValue = (value) => {
        setInputValues((prev) => ({ val: prev.val + value }));
    }

    const clearAll = () => {
        setInputValues({ val: '' });
    }

    const clear = () => {
        if (inputValues.val && inputValues.val.length > 0) {
            setInputValues((prev) => ({ val: prev.val.slice(0, -1) }));
        }
    }

    const toogleDictionary = () => {
        setUseDictionary((prev) => ({ enabled: !prev.enabled }));
    }

    const inputHandler = (event) => {
        console.log('test');
        setInputValues(({ val: event.target.value }));
    }

    const classes = useStyles();
    const backSpaceIcon = <BackspaceIcon /> 
    const clearIcon = <ClearIcon />
    const bookIcon = <MenuBookIcon />

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
            <Grid container spacing={3} className={classes.phone}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.cellDisplay}>{inputValues.val}</Typography>
                        <Typography className={classes.cellDisplay}>prediction</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} className={classes.numInput}>
                    <TextField className={classes.textFieldInput} type='number' value={inputValues.val} onChange={(event) => inputHandler(event)} />
                </Grid>
                <CellButton size={4} className={classes.key} action={toogleDictionary} icon={bookIcon} toogle={useDictionary.enabled} />
                <CellButton size={4} className={classes.key} action={clearAll} icon={clearIcon} />
                <CellButton size={4} className={classes.key} action={clear} icon={backSpaceIcon} />
                <CellButton size={4} className={classes.key} text={'1'} action={addValue} />
                <CellButton size={4} className={classes.key} text={'2'} subtext='abc' action={addValue} />
                <CellButton size={4} className={classes.key} text={'3'} subtext='def' action={addValue} />
                <CellButton size={4} className={classes.key} text={'4'} subtext='ghi' action={addValue} />
                <CellButton size={4} className={classes.key} text={'5'} subtext='jkl' action={addValue} />
                <CellButton size={4} className={classes.key} text={'6'} subtext='mno' action={addValue} />
                <CellButton size={4} className={classes.key} text={'7'} subtext='pqrs' action={addValue} />
                <CellButton size={4} className={classes.key} text={'8'} subtext='tuv' action={addValue} />
                <CellButton size={4} className={classes.key} text={'9'} subtext='vwyz' action={addValue} />
                <CellButton size={4} className={classes.key} text={'*'} action={addValue} />
                <CellButton size={4} className={classes.key} text={'0'} subtext='' action={addValue} />
                <CellButton size={4} className={classes.key} text={'#'} action={addValue} />

            </Grid>
            </ThemeProvider>
        </div>
    );
}

export default Cellphone;
