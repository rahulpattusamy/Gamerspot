import { HStack, Img } from "@chakra-ui/react"
import logo from '../assets/logo.webp'


const NavBar = () => {
  return (
    <div>

        <HStack justifyContent={"space-around"}>
            <Img src={logo} boxSize="60px"/>
        </HStack>

    </div>
  )
}

export default NavBar