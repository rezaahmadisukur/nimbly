import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { useDispatch } from "react-redux";
import { addToCart, decrementInCart } from "@/redux/slices/cartSlice";

export const title = "Quantity Picker";

interface TypeProps {
  qty: number;
  id: number;
}

const QunatityBtn = (props: TypeProps) => {
  const { qty, id } = props;
  const dispatch = useDispatch();
  // const [quantity2, setQuantity2] = useState(5);
  // console.log(qty);

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          disabled={qty === 1}
          onClick={() => dispatch(decrementInCart({ id: id, qty: 1 }))}
          size="sm"
          variant="outline"
        >
          <MinusIcon />
        </Button>
        <ButtonGroupText className="min-w-12 justify-center">
          {qty}
        </ButtonGroupText>
        <Button
          onClick={() => dispatch(addToCart({ id: id, qty: 1 }))}
          size="sm"
          variant="outline"
        >
          <PlusIcon />
        </Button>
      </ButtonGroup>
      {/* <ButtonGroup>
        <Button
          disabled={quantity2 === 0}
          onClick={() => setQuantity2(Math.max(0, quantity2 - 1))}
          size="sm"
          variant="outline"
        >
          <MinusIcon />
        </Button>
        <ButtonGroupText className="min-w-16 justify-center">
          Qty: {quantity2}
        </ButtonGroupText>
        <Button
          onClick={() => setQuantity2(quantity2 + 1)}
          size="sm"
          variant="outline"
        >
          <PlusIcon />
        </Button>
      </ButtonGroup> */}
    </div>
  );
};

export default QunatityBtn;
