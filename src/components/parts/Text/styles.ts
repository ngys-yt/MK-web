import { css } from '@emotion/react';



type GetStyleInput = {
  size: string;
  color: string;
};

export const getStyle = ({ size, color }: GetStyleInput) => {
  return {
    container: css({
      color: 'black',
    }),
  };
};
