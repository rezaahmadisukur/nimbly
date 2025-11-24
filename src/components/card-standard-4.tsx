import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const title = "Image Card";

interface TypeProps {
  title?: string;
  image?: string;
}

const CardStandart = (props: TypeProps) => {
  const { title, image } = props;
  return (
    <Card className="w-full max-w-md overflow-hidden rounded-sm hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-0">
        {/** biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic" */}
        <img alt={title} src={image} />
      </CardContent>
      <CardTitle className="text-center">{title}</CardTitle>
    </Card>
  );
};

export default CardStandart;
