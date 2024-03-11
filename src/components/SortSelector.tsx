import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordered by: criteria
      </MenuButton>
      <MenuList>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 1</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
