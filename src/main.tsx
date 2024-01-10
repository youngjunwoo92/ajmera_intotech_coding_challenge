import ReactDOM from 'react-dom/client';
import {
  QueryObserverOptions,
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';
import {
  responsiveFontSizes,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from '@mui/material';

import App from './App.tsx';
import './index.css';

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

const config: QueryObserverOptions = {
  suspense: true,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
      ...config,
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
