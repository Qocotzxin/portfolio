import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { FaFlickr, FaDailymotion } from "react-icons/fa";

const DEFAULT_SIZE_PROPS: IconProps = {
  width: "24px",
  height: "24px",
};

export const Languages: FC<IconProps> = (props) => (
  <Icon {...DEFAULT_SIZE_PROPS} {...props} as={MdLanguage} />
);

export const Hamburger: FC<IconProps> = (props) => (
  <Icon {...DEFAULT_SIZE_PROPS} {...props} as={BiMenu} />
);

export const Github: FC<IconProps> = (props) => (
  <Icon {...DEFAULT_SIZE_PROPS} {...props} as={AiFillGithub} />
);

export const LinkedIn: FC<IconProps> = (props) => (
  <Icon {...DEFAULT_SIZE_PROPS} {...props} as={AiFillLinkedin} />
);

export const Flickr: FC<IconProps> = (props) => (
  <Icon {...DEFAULT_SIZE_PROPS} {...props} as={FaFlickr} />
);

export const DailyMotion: FC<IconProps> = (props) => (
  <Icon {...DEFAULT_SIZE_PROPS} {...props} as={FaDailymotion} />
);
