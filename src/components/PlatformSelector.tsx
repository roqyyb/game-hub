// import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// import { BsChevronDown } from "react-icons/bs";
// import usePlatforms, { Platform } from "../hooks/usePlatorms";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatform: Platform | null;
// }

// function PlatformSelector({ selectedPlatform, onSelectPlatform }: Props) {
//   const { error, data } = usePlatforms();
//   if (error) return null;
//   return (
//     <Menu>
//       <MenuButton as={Button} rightIcon={<BsChevronDown />}>
//         {selectedPlatform?.name || "Platforms"}
//       </MenuButton>
//       <MenuList>
//         {data?.results?.map((platform) => (
//           <MenuItem
//             onClick={() => onSelectPlatform(platform)}
//             key={platform.id}
//           >
//             {platform.name}
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// }

// export default PlatformSelector;

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatorms";
import usePlatformLookUp from "../hooks/usePlatformLookUp";

interface Props {
  onSelectPlatform: (platformID: number) => void;
  selectedPlatformID: number;
}

function PlatformSelector({ selectedPlatformID, onSelectPlatform }: Props) {
  const { error, data } = usePlatforms();
  const selectedPlatform = usePlatformLookUp(selectedPlatformID);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
