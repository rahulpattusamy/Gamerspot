import { Card, CardBody, Heading, HStack, Img } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"

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
            <HStack justifyContent='space-between'>
            <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>  
            </HStack>
            
        </CardBody>
     </Card>

    </div>
  )
}

export default GameCard