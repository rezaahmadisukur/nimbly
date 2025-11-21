import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "@/components/ui/card";
import { Eye, ShoppingBasket } from "lucide-react";
import { useContext } from "react";
import { Context } from "@/contexts/Context";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";

interface TypePropParams {
  id: number;
  title?: string;
  image: string;
  description?: string;
  price?: number;
  category: string;
}

// interface TypeDispatch {
//   id: number;
//   qty: number;
// }

export default function CardProduct(props: TypePropParams) {
  const { id, title, image, description, price, category } = props;
  const { setShowDetail, setProductId } = useContext(Context);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-center">
      <Card className="w-60">
        <CardContent className="p-3">
          <div className="aspect-square rounded-md bg-gray-100 mb-2 relative">
            <div className="flex items-center justify-center h-full text-muted-foreground text-xs overflow-hidden rounded">
              <img src={image} alt={title} />
            </div>
            <Badge className="absolute top-2 left-2 text-[10px]">
              {category}
            </Badge>
          </div>
          <CardTitle className="text-sm mb-1 line-clamp-1">{title}</CardTitle>
          <CardDescription className="text-xs mb-2 line-clamp-1">
            {description}
          </CardDescription>
          <div className="flex items-center justify-end">
            <span className="text-sm font-bold">
              {price?.toLocaleString("en-EN", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2
              })}
            </span>
          </div>
          <div className="flex flex-col w-full overflow-hidden gap-1 mt-1">
            <Button
              size="sm"
              onClick={() => {
                setProductId(id);
                setShowDetail((prev) => !prev);
              }}
              className="text-xs px-2 py-1 h-7 bg-transparent text-neutral-900 border hover:bg-slate-200"
            >
              <Eye />
              Show Detail
            </Button>
            <Button
              size="sm"
              className="text-xs px-2 py-1 h-7 w-full"
              type="button"
              onClick={() => dispatch(addToCart({ id: id, qty: 1 }))}
            >
              <ShoppingBasket />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
