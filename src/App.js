/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { Button } from 'components';
import { theme } from './configs/theme';
import { Input } from './components/Input/Input';

function App() {
    return (
      <ThemeProvider theme={{ theme }}>
        <div css={{ borderRadius: theme.borderRadius[5] }}>
          <Button> مهدی</Button>
        </div>
      </ThemeProvider>
    );
}

export default App;
