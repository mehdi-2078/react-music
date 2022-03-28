/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import bannerImage from '../../assets/images/elizeu-dias-aZ3qiq1eTRk-unsplash (1)-min.jpg';

export function Banner() {
    return (
      <div css={{
            position: 'relative', backgroundColor: 'red', width: '100%', height: '454px',
        }}
      >
        <img src={bannerImage} alt="" css={{ position: 'absolute', width: 'inherit', height: 'inherit' }} />
        <div css={css` background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
              position: absolute;
              height: inherit;
              width: inherit`}
        />
        <span>mmmm</span>
      </div>
    );
}
