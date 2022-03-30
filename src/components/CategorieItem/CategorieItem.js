/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import musicCover from '../../assets/images/elizeu-dias-aZ3qiq1eTRk-unsplash (1)-min.jpg';

export function CategorieItem({ name, image }) {
    const { theme } = useTheme();
    return (
      <a css={{
          width: '47%',
          margin: '3px 4px',
          position: 'relative',
          cursor: 'pointer',
       }}
      >
        <img
          src={image}
          alt=''
          css={{
              width: '100%',
              height: 75,
              borderRadius: theme.borderRadius[1],
              objectFit: 'cover',
          }}
        />
        <div css={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            color: theme.colors.Doctor,
            fontSize: theme.typography.h4.fontSize,
            fontWeight: theme.typography.h4.fontWeight,
        }}
        >
          {name}
        </div>
      </a>
    );
}
