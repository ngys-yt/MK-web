import { css } from '@emotion/css';

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
