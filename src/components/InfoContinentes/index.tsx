import {useState,useEffect} from 'react'
import {Flex,Box,Text,HStack, Wrap, WrapItem,Center,Image,useMediaQuery,Spinner} from '@chakra-ui/react';

type City = {
    name:string;
    country:string;
    imgName:string;
}

interface InfoContinentesProps{
    description:string;
    numContry:number;
    countLanguages:number;
    cities: City[];
}

export default function InfoContinentes (
        {description,
         numContry,
         countLanguages,
         cities} : InfoContinentesProps){
    
    const [loading,setLoading] = useState(false);
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
   
    useEffect(() => {
        setLoading(true);
        console.log('isLargerThan1280 EFFECT: ', isLargerThan1280)
        console.log('loading: ', loading)
    },
    [isLargerThan1280])
    
    if(loading){

        if(isLargerThan1280) {
            return (
                <>
                    <Flex flexDirection="row" alignItems="center" justifyContent="space-between" w="70%">
                        <Box h="211px" w="600px">
                            <Text textAlign="justify">
                            {description}
                            </Text>
                        </Box>
                        <Box  h="99px" w="490px"  alignItems="center" justifyContent="center">
                            <HStack justifyContent="space-between"  >
                                <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                    <Text 
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="48px"
                                        textAlign="center"
                                        textColor={'#FFBA08'} >
                                        {numContry}
                                    </Text>
                                    <Text
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="24px"
                                        textAlign="center"
                                    >países</Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                    <Text 
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="48px"
                                        textAlign="center"
                                        textColor={'#FFBA08'} >
                                            {countLanguages}
                                    </Text>
                                    <Text
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="24px"
                                        textAlign="center"
                                    >línguas</Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                    <Text 
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="48px"
                                        textAlign="center"
                                        textColor={'#FFBA08'} >27
                                    </Text>
                                    <Text
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="24px"
                                        textAlign="center"
                                    >cidades + 100</Text>
                                </Flex>
                            </HStack>
                        </Box>
                    </Flex>
                    <Flex h="700"  w="70%" flexDirection="column">
                        <Flex mb="10" justifyContent="flex-start" alignItems="flex-start">
                            <Text
                                fontFamily="Poppins"
                                fontWeight="600"
                                fontSize="36px"
                                textAlign="center"
                            >Cidades + 100</Text>
                        </Flex>
                        <Wrap spacing="50px" >
                            {
                                cities.map(elemento => (
                                    <WrapItem >
                                        <Center w="256px" h="279px"  borderRadius={5} borderColor={'yellow.300'} borderWidth={1} >
                                        <Flex w="100%" h="100%"  flexDir="column">
                                            <Image 
                                            src={`/images/${elemento.imgName}.svg`}
                                            fallbackSrc={`/images/${elemento.imgName}.jpg`}
                                            h="173px" 
                                            w="256px"/>
                                            
                                            <Flex flexDirection="row" h="100%">
                                                <Flex  
                                                    w="50%"
                                                    justifyContent="space-around"
                                                    flexDirection="column">
                                                    <Text>{elemento.name}</Text>
                                                    <Text>{elemento.country}</Text>
                                                </Flex>
                                                <Flex h="100%" w="50%" align="center" justifyContent="center">
                                                    <Image 
                                                    src={`/images/${elemento.imgName}.svg`}
                                                    fallbackSrc={`/images/${elemento.imgName}.jpg`}
                                                    h="10"
                                                    w="10"/>
                                                </Flex>
                                            </Flex>
                                            
                                        </Flex>
                                        
                                        </Center>
                                    </WrapItem>
                                ))
                            }
                            
                        </Wrap>
                    </Flex>
                </>

            )
        } else {
            return (
                <>
                    <Flex flexDirection="column" alignItems="center"  w="70%">
                        <Box  w="343px" mb={10}>
                            <Text textAlign="justify" fontSize="14px">
                            {description}
                            </Text>
                        </Box>
                        <Box  w="343px"  alignItems="center" justifyContent="center">
                            <HStack justifyContent="space-between"  >
                                <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                    <Text 
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="24px"
                                        textAlign="center"
                                        textColor={'#FFBA08'} >
                                        {numContry}
                                    </Text>
                                    <Text
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="14px"
                                        textAlign="center"
                                    >países</Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                    <Text 
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="24px"
                                        textAlign="center"
                                        textColor={'#FFBA08'} >
                                            {countLanguages}
                                    </Text>
                                    <Text
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="14px"
                                        textAlign="center"
                                    >línguas</Text>
                                </Flex>
                                <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                    <Text 
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="24px"
                                        textAlign="center"
                                        textColor={'#FFBA08'} >27
                                    </Text>
                                    <Text
                                        fontFamily="Poppins"
                                        fontWeight="600"
                                        fontSize="14px"
                                        textAlign="center"
                                    >cidades + 100</Text>
                                </Flex>
                            </HStack>
                        </Box>
                    </Flex>
                    <Flex h="700"  w="70%" flexDirection="column">
                        <Flex mb="10" justifyContent="flex-start" alignItems="flex-start">
                            <Text
                                fontFamily="Poppins"
                                fontWeight="600"
                                fontSize="36px"
                                textAlign="center"
                            >Cidades + 100</Text>
                        </Flex>
                        <Wrap spacing="50px" >
                            {
                                cities.map(elemento => (
                                    <WrapItem >
                                        <Center w="256px" h="279px"  borderRadius={5} borderColor={'yellow.300'} borderWidth={1} >
                                        <Flex w="100%" h="100%"  flexDir="column">
                                            <Image 
                                            src={`/images/${elemento.imgName}.svg`}
                                            fallbackSrc={`/images/${elemento.imgName}.jpg`}
                                            h="173px" 
                                            w="256px"/>
                                            
                                            <Flex flexDirection="row" h="100%">
                                                <Flex  
                                                    w="50%"
                                                    justifyContent="space-around"
                                                    flexDirection="column">
                                                    <Text>{elemento.name}</Text>
                                                    <Text>{elemento.country}</Text>
                                                </Flex>
                                                <Flex h="100%" w="50%" align="center" justifyContent="center">
                                                    <Image 
                                                    src={`/images/${elemento.imgName}.svg`}
                                                    fallbackSrc={`/images/${elemento.imgName}.jpg`}
                                                    h="10"
                                                    w="10"/>
                                                </Flex>
                                            </Flex>
                                            
                                        </Flex>
                                        
                                        </Center>
                                    </WrapItem>
                                ))
                            }
                            
                        </Wrap>
                    </Flex>
                </>

            );
        }

    } else {
        return (
               
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
             />)
    }
}