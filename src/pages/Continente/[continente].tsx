import {Box,VStack} from '@chakra-ui/react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import InfoContinentes from '../../components/InfoContinentes';

export default function Continente(){
    const continente = [{continente:'europa',bunner:""}]
    return (
   
        <>
          <Box marginBottom={20}>
          <VStack spacing={12}>
            <Header />
            <Banner src="/images/Banner.svg" h={500} w="100%"/>
            <InfoContinentes />
          </VStack>
          </Box>
        </>
      )

}

export async function getStaticPaths() {
   
      let obj = {
        params: {
          continente:'europa'
        }
      }

    let continentes = []
    continentes = [...continentes,obj]

    return {
      paths:continentes,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
    console.log('params: ',params);
    return {
      props: {
        postData :{}
      }
    }
  }