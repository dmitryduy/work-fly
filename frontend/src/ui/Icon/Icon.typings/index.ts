import { SVGProps } from 'react';

import { LIST_ICON_NAME } from '../../../../public/sprites/icon-names';

export interface IIconProps extends SVGProps<SVGSVGElement>{
  name: typeof LIST_ICON_NAME[number];
  section?: string;
  fill?: string;
  width?: number;
  height?: number;
}
