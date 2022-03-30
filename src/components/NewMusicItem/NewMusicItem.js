/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import musicCover from '../../assets/images/elizeu-dias-aZ3qiq1eTRk-unsplash (1)-min.jpg';

export function NewMusicItem() {
    const { theme } = useTheme();
    return (
      <div css={{
            margin: '25px 10px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}
      >
        <img src={musicCover} alt="" css={{ borderRadius: theme.borderRadius[3], height: '170px', width: '170px' }} />
        <span css={{ fontSize: 16, marginTop: 13, color: theme.colors.Mercury }}>
          Red (Taylor’s Version)
        </span>
        <span css={{
                fontSize: 13,
                marginTop: 7,
                color: theme.colors.GreyCloud,
            }}
        >
          Taylor Swift
        </span>
      </div>
    );
}
