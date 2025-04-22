import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"


const GenreSkeleton = () => {
  return (
    <div>
    <HStack gap="5">
      <SkeletonCircle size="10" />
      <Stack flex="1">
        <Skeleton height="5" />
      </Stack>
    </HStack>
        
    </div>
  )
}

export default GenreSkeleton