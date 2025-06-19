import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";


interface Props {
  Onselecteplatfrom: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ Onselecteplatfrom, selectedPlatformId }: Props) => {
  const { data } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId)

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform: Platform) => (
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
