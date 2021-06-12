import { Box, VStack,Divider,Image } from '@chakra-ui/react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ControlTipoViagem from '../components/ControlTipoViagem';
import Cta from '../components/Cta';

export default function Home() {
  return (
   
    <>
      <Box marginBottom={20}>
      <VStack spacing={12}>
        <Header />
        <Banner />
        <ControlTipoViagem />
        <Divider orientation="horizontal" borderWidth={10} width={90}  />
        <Box>
            <Image
               h="100"
               w="100"
               src="/images/vamosNessa.svg"
               alt="Vamos Nessa"
            />
        </Box> 
      </VStack>
      </Box>
      <Cta/>
     
    </>
   
   
    
  )
}
