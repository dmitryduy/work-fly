import { FC } from "react";

import { Common } from "./InputIcon.styles";
import { IInputIconProps } from "./InputIcon.typings";

{ /* eslint-disable max-len */ }
const InputIcon: FC<IInputIconProps> = ({type}) => {
  if (type === 'error') return <Common>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="#ECACA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7V12.3565" stroke="#D44333" strokeWidth="2.19753" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9997 18.1249C12.91 18.1249 13.6479 17.387 13.6479 16.4768C13.6479 15.5665 12.91 14.8286 11.9997 14.8286C11.0895 14.8286 10.3516 15.5665 10.3516 16.4768C10.3516 17.387 11.0895 18.1249 11.9997 18.1249Z" fill="#D44333"/>
    </svg>
  </Common>;

  if (type === 'done') return <Common>

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="#9EE2B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.25 9.68164L11.0833 15.568L8 12.6248" stroke="#21A453" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </Common>;

  return null;
};

export default InputIcon;
