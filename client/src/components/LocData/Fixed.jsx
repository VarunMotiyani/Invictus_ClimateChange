import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Icon, Button } from '@material-ui/core';
import { ReportProblemOutlined as ReportProblemOutlinedIcon } from '@material-ui/icons';
import { WbSunny, Opacity, SettingsInputComponent, Whatshot } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
root: {
padding: theme.spacing(3, 2),
margin: theme.spacing(3),
backgroundColor: '#fafafa',
boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
},
heading: {
textAlign: 'center',
marginBottom: theme.spacing(3),
},
icon: {
fontSize: '3rem',
margin: theme.spacing(2),
color: '#3f51b5',
},
boldMessage: {
textAlign: 'center',
fontWeight: 'bold',
color: 'red',
margin: theme.spacing(3),
},
section: {
marginTop: theme.spacing(3),
},
sosBtn: {
display: 'block',
margin: '0 auto',
marginTop: theme.spacing(3),
padding: theme.spacing(2),
backgroundColor: 'red',
color: 'white',
'&:hover': {
backgroundColor: 'darkred',
},
},
precautionsList: {
margin: theme.spacing(2, 0),
listStyle: 'none',
paddingLeft: '0',
},
precautionItem: {
margin: theme.spacing(2, 0),
display: 'flex',
alignItems: 'center',
},
precautionIcon: {
marginRight: theme.spacing(2),
color: '#3f51b5',
},
sosIcon: {
marginRight: theme.spacing(1),
},
}));

const MumbaiWeather = () => {
    const classes = useStyles();
    
    return (
    <Paper className={classes.root}>
    <Typography variant="h4" className={classes.heading}>
    Mumbai Weather
    </Typography>
    <Grid container justify="center">
    <Grid item xs={3}>
    <Icon className={classes.icon}><WbSunny /></Icon>
    <Typography variant="h5">32°C</Typography>
    </Grid>
    <Grid item xs={3}>
    <Icon className={classes.icon}><Opacity /></Icon>
    <Typography variant="h5">98%</Typography>
    </Grid>
    <Grid item xs={3}>
    <Icon className={classes.icon}><SettingsInputComponent /></Icon>
    <Typography variant="h5">1013 hPa</Typography>
    </Grid>
    <Grid item xs={3}>
    <Icon className={classes.icon}><Whatshot /></Icon>
    <Typography variant="h5">95%</Typography>
    </Grid>
    </Grid>
    <Typography variant="h4" className={classes.boldMessage}>
    Caution! Heavy Rainfalls and Floods are expected in your Area.
    </Typography>

    {/* add the graph images here */}
    
      <Grid container className={classes.section}>
        <Grid item xs={6}>
          <Typography variant="h5">Precautions to take:</Typography>
          <ul className={classes.precautionsList}>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Avoid non-essential travel.
            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Stay updated on weather updates and news.
            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Store sufficient food, water and other essentials.
            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Stay away from low-lying areas and waterlogged streets.
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">Nearest Help Centers:</Typography>
          <ul className={classes.precautionsList}>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              National Disaster Response Force (NDRF) - Contact No. 974247738
            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Mumbai Fire Brigade - Contact No. 101

            </li>
            <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              BMC Disaster Management Cell - Contact No. 022-22694725
    </li>
    <li className={classes.precautionItem}>
              <ReportProblemOutlinedIcon className={classes.precautionIcon} />
              Police Control Room - Contact No. 100

            </li>
    </ul>
    </Grid>
    </Grid>
    <Button
variant="contained"
className={classes.sosBtn}
startIcon={<ReportProblemOutlinedIcon className={classes.sosIcon} />}
>
SOS
</Button>
    </Paper>
    );
    };
    
    export default MumbaiWeather;
    
    
    
    