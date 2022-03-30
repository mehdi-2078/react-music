/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';
import { CategorieItem } from 'components';
import popImg from '../../assets/images/pop.jpg';
import chillImg from '../../assets/images/chill.jfif';
import podcastImg from '../../assets/images/podcast.jfif';
import christmasImg from '../../assets/images/christmas.jfif';
import romanceImg from '../../assets/images/romance.jpg';
import hiphopImg from '../../assets/images/hip hop.jpg';
import rockImg from '../../assets/images/rock.jfif';
import jazzImg from '../../assets/images/jazz.jpg';

export function Categories() {
    const { theme } = useTheme();
    const categories = [
        { name: 'pop', image: popImg },
        { name: 'chill', image: chillImg },
        { name: 'podcast', image: podcastImg },
        { name: 'christmas', image: christmasImg },
        { name: 'romance', image: romanceImg },
        { name: 'Hip Hop', image: hiphopImg },
        { name: 'rock', image: rockImg },
        { name: 'jazz', image: jazzImg },
    ];
    return (
      <div css={{
            marginTop: 50,
            width: '93%',
        }}
      >
        <div css={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span css={{ fontSize: theme.typography.h4.fontSize }}>Categories</span>
          <span css={{
                    color: theme.colors.PinkPeach,
                    fontSize: theme.typography.small.fontSize,
                }}
          >
            See all
          </span>
        </div>
        <div css={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
          {categories.map((item, index) => (
            <CategorieItem name={item.name} image={item.image} />
            ))}
        </div>
      </div>
    );
}
