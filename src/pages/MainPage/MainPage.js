/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import {
    LeftSideBar, RightSideBar, Banner, NewMusic, Categories,
} from 'containers';

export function MainPage() {
    const { theme } = useTheme();
    return (
      <div css={{
            width: '100%',
            backgroundColor: theme.colors.CynicalBlack,
            color: theme.colors.Doctor,
            display: 'flex',
        }}
      >
        <div css={{
                width: '15%',
                minHeight: '100vh',
                backgroundColor: theme.colors.DireWolf,
            }}
        >
          <LeftSideBar />
        </div>

        <div css={{ width: '63%', margin: '0 auto', paddingBottom: 100 }}>
          <div css={{ width: '90%', margin: '0 auto' }}>
            <Banner />
            <NewMusic />
          </div>
        </div>
        <div css={{ width: '34%', backgroundColor: theme.colors.CynicalBlack }}>
          <RightSideBar />
          <Categories />
        </div>
      </div>
    );
}
