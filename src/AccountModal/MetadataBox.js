import { Text, Grid, GridItem } from '@chakra-ui/react';

import metadata from './parsedData.json';
import rates from './nftRates.json';

const MetadataBox = ({ index }) => {
    const findIndex = (data, index) => {
      const dataList = data.find((dataList) => dataList.index === index);
      return dataList && dataList.index;
    }
    const data = findIndex(metadata, index);

    return(<Grid templateColumns='repeat(2, 1fr)' gap={4}>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Background: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Background']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Background'][metadata[data]['Background']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Fur: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Fur']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Fur'][metadata[data]['Fur']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Base: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Base']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Base'][metadata[data]['Base']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Injuries: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Hair-Hats']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Hair-Hats'][metadata[data]['Hair-Hats']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Injuries: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Injuries']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Injuries'][metadata[data]['Injuries']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Mouth: </Text>
              <Text color={"white"} marginStart={"1em"}>{metadata[data]['Mouth']}</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"row"}>
              <Text color={"white"}>Rate:</Text>
              <Text color={"white"} marginStart={"1em"}>{(rates['Mouth'][metadata[data]['Mouth']] * 100 / 3333).toFixed(2)}%</Text>
            </GridItem>
          </Grid>);
}

export default MetadataBox;
