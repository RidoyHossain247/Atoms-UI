import { type FC } from "react";
import { Link as RouteLink } from "react-router-dom";

interface IProps {
  label: string;
  url: string;
  className?: string;
}

const Link: FC<IProps> = ({ label, url, className, ...rest }) => {
  return (
    <RouteLink to={url} className={className} {...rest}>
      {label}
    </RouteLink>
  );
};

export default Link;
