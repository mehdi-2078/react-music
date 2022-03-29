/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { FaEllipsisH, FaRegHeart } from 'react-icons/fa';
import bannerImage from '../../assets/images/kevin-britos-PHYgBreyeYc-unsplash-min.jpg';
import { theme } from '../../configs/theme';

export function RightBarItem() {
    return (
      <div css={{
 display: 'flex', alignItems: 'center', width: '90%', margin: 'auto',
}}
      >
        <span>1</span>
        <div css={{
 display: 'flex', alignItems: 'center', justifyContent: 'spaceBetween', paddingTop: 20, paddingBottom: 20,
}}
        >
          <div css={{ display: 'flex' }}>
            <img src={bannerImage} alt='' css={{ width: '57px', height: '57px', borderRadius: theme.borderRadius[1] }} />
            <div>
              <div>Eeasy on me</div>
              <div>Adele</div>
            </div>
          </div>
          <div css={{ display: 'flex' }}>
            <span>3:45</span>
            <FaRegHeart />
            <FaEllipsisH />
          </div>
        </div>

      </div>
    );
}
