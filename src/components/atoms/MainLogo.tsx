import { type FC } from "react";

interface IProps {
  src: string;
  label: string;
  width?: number;
  height?: number;
  className?: string;
}

const MainLogo: FC<IProps> = ({ src, label = "Logo",width=100,height,className }) => {
  return <img width={width} height={height} src={src} alt={label} className={className} />;
};

export default MainLogo;
