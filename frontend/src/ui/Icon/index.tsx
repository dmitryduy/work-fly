import { FC } from 'react';

import { IIconProps } from './Icon.typings';

const Icon: FC<IIconProps> = ({
  name,
  section = 'icons',
  fill = 'currentColor',
  width = 20,
  height = 20,
  ...props
}) => {

  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <use xlinkHref={`/sprites/${section}.svg#${name}`}/>
    </svg>
  );
};

export default Icon;
