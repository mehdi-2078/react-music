/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import * as PropTypes from 'prop-types';
import {
    FaStepBackward, FaPauseCircle, FaStepForward, FaComment, FaPlus, FaHeart, FaEllipsisH,
} from 'react-icons/fa';
import image from '../../assets/images/chill.jfif';

export function PlayMusic() {
    const { theme } = useTheme();
    return (
      <div css={{
            display: 'flex',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            backgroundColor: theme.colors.DireWolf,
            height: 75,
            borderTop: '1px solid #7A8580',
        }}
      >
        <div css={{
                width: '20%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
          <FaStepBackward css={{ fontSize: 20, cursor: 'pointer' }} />
          <FaPauseCircle css={{ fontSize: 30, margin: '0 10px', cursor: 'pointer' }} />
          <FaStepForward css={{ fontSize: 20, cursor: 'pointer' }} />
        </div>
        <div css={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
          <img
            src={image}
            alt=''
            css={{
                        width: '50px',
                        height: '50px',
                        borderRadius: theme.borderRadius[1],
                        marginRight: 30,
                    }}
          />
          <div>
            <div css={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 5,
                    }}
            >
              <span>On The Ground</span>
              <span css={{ marginLeft: 10 }}>Rosé</span>
            </div>
            <input
              type='range'
              css={{ height: 3, width: 500 }}
            />
          </div>
        </div>
        <div css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            width: '30%',
            borderLeft: '1px solid #7A8580',
            }}
        >
          <div css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '30%',
          }}
          >
            <FaComment />
            <FaPlus />
            <FaHeart />
            <FaEllipsisH />
          </div>
        </div>
      </div>

    );
}
