import {FC} from "react";

import {TagStyled} from "./Tag.styles";
import {ITagProps} from "./Tag.typings";

const Tag: FC<ITagProps> = ({textColor, backgroundColor, children}) => {
  return (
    <TagStyled
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </TagStyled>
  );
};

export default Tag;
