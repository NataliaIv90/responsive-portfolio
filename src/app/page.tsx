'use client';
import './page.module.css';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useContext } from 'react';
import { muiTheme, darkTheme } from '../theme/muiTheme';
import { Header } from '@/pages/layout/header/Header';
import { Footer } from '@/pages/layout/footer/Footer';
import { Main } from '@/pages/layout/main/Main';
import { PageWrapper } from './page.styled';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function Home() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <ThemeProvider theme={theme.palette.mode === 'dark' ? darkTheme : muiTheme}>
        <PageWrapper>
          <Header />
          <Main />
          <Footer />
        </PageWrapper >
      </ThemeProvider >
    </>
  )
}
