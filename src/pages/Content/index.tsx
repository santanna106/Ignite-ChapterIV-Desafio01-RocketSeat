import {Box,VStack} from '@chakra-ui/react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
export default function Content(){
    const continente = [{continente:'europa',bunner:""}]
    return (
   
        <>
          <Box marginBottom={20}>
          <VStack spacing={12}>
            <Header />
            <Banner src="/images/Banner.svg" h={500} w="100%"/>
          </VStack>
          </Box>
        </>
      )

}