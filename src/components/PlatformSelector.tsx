import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatorms";
import usePlatformLookUp from "../hooks/usePlatformLookUp";
import useGameQueryStore from "../store";

function PlatformSelector() {
  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const setPlatformID = useGameQueryStore((s) => s.setPlatformID);

  const { error, data } = usePlatforms();
  const selectedPlatform = usePlatformLookUp(platformID);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformID(platform.id)}
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
