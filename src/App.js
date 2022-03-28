/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { Button } from 'components';
import { theme } from './configs/theme';
import { Input } from './components/Input/Input';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
    return (
      <ThemeProvider theme={{ theme }}>
        <MainPage />
      </ThemeProvider>
    );
}

export default App;
