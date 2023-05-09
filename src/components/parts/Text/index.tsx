import { getStyle } from './styles';
import { TextSize } from '@/utils/textSize';

export type Props = {
  size?: TextSize;
  color?: string;
  children: string;
};

const Text = ({ size = 'm', color = '', children }: Props) => {
  const style = getStyle({ size, color });
  return <div className={style.container}>{children}</div>;
};

// テst
export default Text;
