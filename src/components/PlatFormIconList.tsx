import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatFormIconList({ platforms }: Props) {
  console.log(platforms);

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          color={"gray.500"}
          as={iconMap[platform.slug]}
        />
      ))}
    </HStack>
  );
}

export default PlatFormIconList;
