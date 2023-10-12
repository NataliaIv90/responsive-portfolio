'use client';
import './page.module.css';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useContext } from 'react';
import { muiTheme, darkTheme } from '../theme/muiTheme';
import { HeaderComponent } from '@/pages/layout/header/HeaderComponent';
import { FooterComponent } from '@/pages/layout/footer/FooterComponent';
import { MainComponent } from '@/pages/layout/main/MainComponent';
// import { PageWrapper } from './pageStyled';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function Home() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <ThemeProvider theme={theme.palette.mode === 'dark' ? darkTheme : muiTheme}>
        <div className='pageWrapper'>
          <HeaderComponent />
          <MainComponent />
          <FooterComponent />
        </div >
      </ThemeProvider >
    </>
  )
}
