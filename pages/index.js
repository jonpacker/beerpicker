import { Flex, Stack, Select, HStack, Button, Heading } from '@chakra-ui/react'
import {useCallback, useState} from 'react/cjs/react.development'
import data from '../data/beers.json'
export default function Picker() {
  const [style, setStyle] = useState()
  const [pickedBeer, setPickedBeer] = useState()
  const _changeStyle = useCallback((e) => {
    setStyle(e.target.value)
  }, [])
  const _pickBeer = useCallback(() => {
    const beers = data[style]
    setPickedBeer(beers[Math.floor(Math.random() * beers.length)])
  }, [style])
  return (
    <Flex justify='center' align='center' p={15}>
      <Stack maxWidth='90vw' width='600px' align='center' spacing={30}>
        <HStack spacing={10}>
          <Select onChange={_changeStyle}>
            {Object.keys(data).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
          </Select>
          <Button colorScheme='blue' px={10} onClick={_pickBeer}>Pick Beer</Button>
        </HStack>
        <Heading textAlign='center'>{pickedBeer}</Heading>
      </Stack>
    </Flex>
  )
}
