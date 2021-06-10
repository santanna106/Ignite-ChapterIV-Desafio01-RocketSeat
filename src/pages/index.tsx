import { VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ControlTipoViagem from '../components/ControlTipoViagem';

export default function Home() {
  return (
    <VStack spacing={4}>
      <Header />
      <Banner />
      <ControlTipoViagem />
    </VStack>
  )
}
