import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/usePlatform";

interface Props {
  Onselecteplatfrom: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ Onselecteplatfrom , selectedPlatform}: Props) => {
  const { data } = usePlatform();
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform:Platform) => (
            <MenuItem
              onClick={() => Onselecteplatfrom(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelector;
