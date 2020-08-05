import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
        width: '100%',
    },
    buttonSubtext: {
        margin: '2px',
        color: '#fff',
        'text-transform': 'lowercase',
    },
  }));

const CellButton = (props) => {
    const classes = useStyles();
    const buttonContent = (
        props.icon 
        ? props.icon
        : props.subtext
            ? <div>
                <span>{props.text}</span>
                <span className={classes.buttonSubtext}>{props.subtext}</span>
                </div>
            : props.text
    );

    const variant = props.toogle && props.toogle === true ? 'contained' : 'outlined';

    return (
        <Grid item xs={props.size} className={props.className? `${props.className} ${classes.root}` : classes.root}>
            <Button variant={variant} color="primary" onClick={() => props.action(props.text)} className={classes.button}>{buttonContent}</Button>
        </Grid>
    )
}

export default CellButton;