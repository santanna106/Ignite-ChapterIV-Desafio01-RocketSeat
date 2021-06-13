import { Image,Center, ImgProps  } from "@chakra-ui/react";

interface BannerProps extends ImgProps {
  src:string;
}

export default function Banner({src} :BannerProps) {
    return(
        
            <Center w="100%"   >
                <Image
                  src={src}
                  w="100%"
                 />
            </Center>
       
   );
}

