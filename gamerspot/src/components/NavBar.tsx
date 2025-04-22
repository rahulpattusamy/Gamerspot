import { HStack, Img } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"


const NavBar = () => {
  return (
    <div>

        <HStack justifyContent="space-between" padding='10px'>
            <Img src={logo} boxSize="60px"/>
            <ColorModeSwitch/>
        </HStack>

    </div>
  )
}

export default NavBar