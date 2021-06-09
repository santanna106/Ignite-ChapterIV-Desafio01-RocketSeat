import { VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <VStack spacing={1}>
      <Header />
      <Banner />
    </VStack>
  )
}
