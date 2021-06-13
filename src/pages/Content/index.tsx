import {Box,VStack} from '@chakra-ui/react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
export default function Content(){
    return (
   
        <>
          <Box marginBottom={20}>
          <VStack spacing={12}>
            <Header />
            <Banner />
          </VStack>
          </Box>
        </>
      )

}