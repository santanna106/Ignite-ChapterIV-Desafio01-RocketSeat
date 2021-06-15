import {Box,VStack} from '@chakra-ui/react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import InfoContinentes from '../../components/InfoContinentes';

import { continentes } from '../../database/continentes';

type ContinenteObj = {
    imageName:string;
}

interface ContinenteProps {
    description:string;
}

export default function Continente({description} : ContinenteProps){

    return (
   
        <>
          <Box marginBottom={20}>
          <VStack spacing={12}>
            <Header />
            <Banner src="/images/Banner.svg" h={500} w="100%"/>
            {
                /*
                continentes.map(elemento => (
                    <InfoContinentes 
                        description={elemento.description} 
                        numContry={elemento.numContries}
                        countLanguages={elemento.countLanguages}
                        cities={elemento.cities}
                    />
                ))*/
            }
            
          </VStack>
          </Box>
        </>
      )

}

export async function getStaticPaths() {
    const continentes = ['europa','america-do-norte','america-do-sul','asia','africa','oceania']

    let continentesPages = []

    continentes.forEach((elemento) => {
        let obj = {
            params: {
              continente:elemento
            }
        }
    
        continentesPages = [...continentesPages,obj]
      })
      
    return {
      paths:continentesPages,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
    console.log('params: ',params);
    const { continente } = params;
    //continentes[params]
    //console.log('continentes[params]: ', JSON.stringify(continentes[0],null,2));
   
    const continenteIndex = continentes.findIndex((item)=> item.id === continente);
    console.log('continenteIndex: ', JSON.stringify(continentes[continenteIndex],null,2));
    return {
      props: {
        continenteData :{
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      }
    }
  }