import {Box,VStack} from '@chakra-ui/react';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import InfoContinentes from '../../components/InfoContinentes';

import { continentes } from '../../database/continentes';

type City = {
  name:string;
  country: string;
  imgName: string;
}

interface Continente {
  id: string;
  name: string;
  description: string;
  numContries: number;
  countLanguages: number;
  numCities: number;
  cities: City[];
}


interface ContinenteProps {
  continenteData: Continente;
}
export default function Continente(
  {continenteData
  } : ContinenteProps){

    return (
   
        <>
          <Box marginBottom={20}>
          <VStack spacing={12}>
            <Header />
            <Banner src="/images/Banner.svg" h={500} w="100%"/>
              <InfoContinentes 
                        description={continenteData.description} 
                        numContry={continenteData.numContries}
                        countLanguages={continenteData.countLanguages}
                        cities={continenteData.cities}
                    />
            
            
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
    const { continente } = params;
   
    const continenteIndex = continentes.findIndex((item)=> item.id === continente);
   
    return {
      props: {
        continenteData :continentes[continenteIndex]
      }
    }
  }