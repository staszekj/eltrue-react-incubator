import React from 'react';
import './App.css';
import {Typography} from '@material-ui/core'
import {MuiThemeProvider, StylesProvider} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {theme, TTheme} from "./theme";

const useStyles = makeStyles((theme: TTheme) => {
    return {
        MainApp: {
            color: theme.palette.info.main
        },
    }
});

function App() {
    const cs = useStyles();
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Typography variant={'h1'} className={cs.MainApp}>Root Application is here</Typography>
                </div>
            </MuiThemeProvider>
        </StylesProvider>
    );
}

export default App;
