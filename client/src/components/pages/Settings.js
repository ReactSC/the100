import React, { Fragment, useContext, useState } from 'react';
import {
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Paper,
  Typography,
} from '@material-ui/core';

import { SettingContext } from '../store';
import { BackButton } from '../widgets';


const Settings = () => {
  const settings = useContext(SettingContext);
  const theme = settings.initTheme;

  // state for Radio Group
  const [value, setValue] = useState(localStorage.getItem('themeName') ? localStorage.getItem('themeName') : 'default');
  
  
  // Change Context and LocalStorage API
  const handleChange = e => {
    setValue(e.target.value);
    const a = e.target.value;
    switch (a) {
      case "default":
        settings.cngTheme(theme.default);
        localStorage.setItem("themeName", "default");
        localStorage.setItem("theme", JSON.stringify(theme.default));
        break;
      case "light":
        settings.cngTheme(theme.light);
        localStorage.setItem("themeName", "light");
        localStorage.setItem("theme", JSON.stringify(theme.light));
        break;
      case "dark":
        settings.cngTheme(theme.dark);
        localStorage.setItem("themeName", "dark");
        localStorage.setItem("theme", JSON.stringify(theme.dark));
        break;
      default:
        settings.cngTheme(theme.default);
        localStorage.setItem("themeName", "default");
        localStorage.setItem("theme", JSON.stringify(theme.default));
    }
  }

document.title = "Settings | The 100";

  return (
    <Fragment>
      <BackButton />
      <Grid container justify="center">
        <Grid item md={6} xs={8}>
          <Paper
            style={{
              background: settings.theme.paper,
              padding: 20
            }}
          >
            <FormControl component="fieldset">
              <Typography
                variant="h5"
                component="legend"
                style={{ color: settings.theme.color, marginBottom: 10 }}
              >
                Choose Your Theme
              </Typography>

              <RadioGroup
                aria-label="Choose Your Theme"
                style={{ color: settings.theme.color }}
                name="theme"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="default"
                  control={<Radio />}
                  label="Default"
                />

                <FormControlLabel
                  value={"light"}
                  control={<Radio />}
                  label="Light"
                />

                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Dark"
                />
                
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
export default Settings;
