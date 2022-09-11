import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import { MdLanguage } from "react-icons/md";
import { BsFillCloudsFill, BsStars } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

export const Languages: FC<IconProps> = (props) => (
  <Icon {...props} as={MdLanguage} />
);

export const Clouds: FC<IconProps> = (props) => (
  <Icon {...props} as={BsFillCloudsFill} />
);

export const Stars: FC<IconProps> = (props) => <Icon {...props} as={BsStars} />;

export const Hamburger: FC<IconProps> = (props) => (
  <Icon {...props} as={BiMenu} />
);
