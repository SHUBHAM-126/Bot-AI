import { Outlet } from 'react-router-dom'
import { ThemeContext } from './theme/ThemeContext';
import { useState, useRef } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { getThemePallete } from './theme/ThemePallete';
import { Grid } from '@mui/material'

function App() {

  const [mode, setMode] = useState('light')
  const [chat, setChat] = useState([])

  //create theme
  const theme = React.useMemo(() => createTheme(getThemePallete(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ mode: mode, setMode: setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Grid container sx={{ background: 'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))' }} >
          <Grid item xs={12} md={2.5} sx={{ bgcolor: 'primary.light' }}>
            <Sidebar setChat={setChat} />
          </Grid>
          <Grid item xs={12} md={9.5}>
            <Outlet context={{ chat: chat, setChat: setChat }} />
          </Grid>
        </Grid>

      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;