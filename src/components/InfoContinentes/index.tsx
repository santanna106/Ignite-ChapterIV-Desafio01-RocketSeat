import {Flex,Box,Text,HStack, Wrap, WrapItem,Center,Image} from '@chakra-ui/react';

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
                                    <Image src={`/images/${elemento.imgName}.svg`} h="173px" w="256px"/>
                                    <Flex flexDirection="row" h="100%">
                                        <Flex  
                                            w="50%"
                                            justifyContent="space-around"
                                            flexDirection="column">
                                            <Text>{elemento.name}</Text>
                                            <Text>{elemento.country}</Text>
                                        </Flex>
                                        <Flex h="100%" w="50%" align="center" justifyContent="center">
                                            <Image src={`/images/${elemento.imgName}.svg`} h="10" w="10"/>
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
}