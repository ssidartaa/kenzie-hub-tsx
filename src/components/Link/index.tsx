import { IButtonProps } from "../Button";

import { Link } from "./styles";

const LinkComponent = ({ children, ...rest }: IButtonProps) => (
  <Link {...rest}>{children}</Link>
);

export default LinkComponent;
