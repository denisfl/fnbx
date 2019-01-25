import React from 'react';

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
  width: 0,
  height: 0
}

export default () => {
  return (
    <svg style={style} viewBox="0 0 320 480px">
      <defs>
        <symbol>
          <path id="symbol-mask" d="M43.5046174,2 L2,43.5046174 L2,468 C2,473.522847 6.4771525,478 12,478 L308,478 C313.522847,478 318,473.522847 318,468 L318,12 C318,6.4771525 313.522847,2 308,2 L43.5046174,2 Z"/>
        </symbol>
        <clipPath id="mask">
            <use xlinkHref="#symbol-mask"/>
        </clipPath>
      </defs>
    </svg>
  );
};
