import React from 'react';
import { Button, MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core';
import Forward from '@material-ui/icons/FastForwardRounded';
import Reverse from '@material-ui/icons/FastRewindRounded';
import Stop from '@material-ui/icons/PauseRounded';
import styles from '../../../styles/styles';

const style = {
    controlkey: styles.controlkey,
    iconSize: styles.control_iconSize,
    btn: styles.control_btn,
    text: styles.control_text,
};

class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.reverse = this.reverse.bind(this);
        this.stop = this.stop.bind(this);
        this.forward = this.forward.bind(this);
        this.BW = this.BW.bind(this);
        this.CC = this.CC.bind(this);
        this.HP = this.HP.bind(this);
    };
    
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    };

    reverse() {
        alert('REVERSE')
    };

    stop() {
        alert('STOP')
    };

    forward() {
        alert('FORWARD')
    };

    BW() {
        alert('BW')
    };

    CC() {
        alert('CC')
    };

    HP() {
        alert('HP')
    };

    handleKeyPress(e) {
        if (e.keyCode === 81) {
            // Q for reverse
            this.reverse();
        } else if (e.keyCode === 82) {
            // R for stop
            this.stop();
        } else if (e.keyCode === 83) {
            // S for forward
            this.forward();
        } else if (e.keyCode === 78) {
            // N for BW
            this.BW();
        } else if (e.keyCode === 75) {
            // K for CC
            this.CC();
        } else if (e.keyCode === 80) {
            // P for HP 
            this.HP();
        }
    }

    render() {

        const { classes } = this.props;

        const theme = createMuiTheme({
            palette: {
                primary: {main: '#91eb5c'},
                secondary: {main: '#eb5c5c'},
            },
            typography: {
                useNextVariants: true
            }
        });

        return(
            <div className={classes.controlkey}>
                <Button className={classes.btn} variant="outlined" onClick={this.reverse}>
                    <Reverse className={classes.iconSize}/>
                </Button>
                <Button className={classes.btn} variant="outlined" onClick={this.stop}>
                    <Stop className={classes.iconSize} />
                </Button>
                <Button className={classes.btn} variant="outlined" onClick={this.forward}>
                    <Forward className={classes.iconSize} />
                </Button>
                <MuiThemeProvider theme={theme}>
                    <Button className={classes.btn} variant="contained" color="primary" onClick={this.CC}>
                        <h1 className={classes.text}>CC</h1>
                    </Button>
                    <Button className={classes.btn} variant="contained" color="secondary" onClick={this.HP}>
                        <h1 className={classes.text}>HP</h1>
                    </Button>
                </MuiThemeProvider>
                <Button variant="contained" color="primary" onClick={this.BW} className={classes.btn}>
                    <h1 className={classes.text}>BW</h1>
                </Button>
            </div>
        )
    }
};

export default (withStyles(style)(ControlPanel));