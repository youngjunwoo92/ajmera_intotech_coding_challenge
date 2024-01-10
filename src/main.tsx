import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';

import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

let theme = createTheme({
  typography: {
    fontFamily: ['Inter'].join(','),
    allVariants: {
      color: 'rgba(0,0,0,87%)',
    },
  },
  palette: {
    primary: {
      main: '#6941c6',
    },
    text: {
      primary: 'rgba(0,0,0, 87%)',
      secondary: 'rgba(0,0,0, 60%)',
    },
  },
});
theme = responsiveFontSizes(theme);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ThemeProvider>
);
