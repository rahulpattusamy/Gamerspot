import { Card, CardBody, Heading, Img } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <div>
     <Card borderRadius={10} overflow={"hidden"}>
        <Img src={game.background_image}/>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)}/>
        </CardBody>
     </Card>

    </div>
  )
}

export default GameCard