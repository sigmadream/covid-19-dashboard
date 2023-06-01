import React from 'react';
import { css } from '@emotion/react';


export function Slide(props) {
    const { title, children, id } = props;
    return (
        <div
            id={id}
            css={css`
        text-align: center;
        border-bottom: 1px solid #aaa;
        padding-top: 40px;
        padding-bottom: 60px;
        h2 {
          margin-bottom: 24px;
        }
      `}
        >
            <div>
                <h2>{title}</h2>
                <div>{children}</div>
            </div>
        </div>
    );
}
