import { Button, Box } from "@chakra-ui/react";

export default function ConnectButton({ handleOpenModal }) {

  return (
    <Box maxWidth={"320px"}> 
      <Box display="flex" alignItems="center" background="gray.700" borderRadius="xl" py="0" mr="4">
        <Button onClick={handleOpenModal}>MY NFTS</Button>
      </Box>
    </Box>
  );
}
