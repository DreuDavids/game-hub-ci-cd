import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  //color scoring for the critic score
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
