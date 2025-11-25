import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import QunatityBtn from "../../button-group/forms/button-group-forms-4";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../../../redux/store.ts";
import { useContext, useMemo } from "react";
import { Context } from "@/contexts/Context.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { deleteFromCart } from "@/redux/slices/cartSlice.ts";
import { toast } from "sonner";

export const title = "Order Details Sheet";

interface TypeCart {
  id: number;
  title?: string;
  images: string[];
  description?: string;
  price?: number;
  category: TypeCategory;
}

interface TypeCategory {
  name: string;
}

const SheetCart = () => {
  const { products } = useContext(Context);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.data);

  const total = useMemo(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce(
        (acc: number, cur: { id: number; qty: number }) => {
          const prod = (products as TypeCart[]).find(
            (p: TypeCart) => p.id === cur.id
          );
          return acc + (prod?.price ?? 0) * cur.qty;
        },
        0
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      return sum;
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      return 0;
    }
  }, [cart, products]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart />
          {cart.length > 0 && (
            <div className="w-4 h-4 bg-neutral-950 rounded-full absolute top-0 right-0 text-neutral-200 text-[10px] flex justify-center items-center p-1">
              {cart.length}
            </div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-neutral-300">
        <SheetHeader className="shadow-sm bg-neutral-100">
          <SheetTitle>Check Out Now !</SheetTitle>
          <SheetDescription>Don't forget click checkout 😜</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 p-4 relative overflow-y-auto mb-10">
          {cart.length > 0 &&
            cart.map((item: { id: number; qty: number }, index: number) => {
              const product = products.find(
                (prod: TypeCart) => prod.id === item.id
              ) as TypeCart | undefined;
              return (
                <Card className="flex flex-row gap-0 w-full p-2" key={index}>
                  <div className="w-1/3 rounded overflow-hidden">
                    <img
                      src={product?.images[0]}
                      alt={"..."}
                      className="w-full"
                    />
                  </div>
                  <div className="w-2/3 flex flex-col justify-between">
                    <CardHeader className="flex flex-col gap-0">
                      <Badge
                        variant={"secondary"}
                        className="text-[10px] font-semibold"
                      >
                        {product?.category.name}
                      </Badge>
                      <h3 className="font-medium line-clamp-1">
                        {product?.title}
                      </h3>
                      <p className="text-xs font-bold">
                        {(item.qty * (product?.price ?? 0)).toLocaleString(
                          "en-EN",
                          {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2
                          }
                        )}
                      </p>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <QunatityBtn qty={item.qty} id={item.id} />
                      <div>
                        <Button
                          className="bg-transparent border hover:bg-neutral-100"
                          onClick={() => {
                            dispatch(deleteFromCart({ id: item.id }));
                            toast.success("Delete from cart Successfully", {
                              position: "bottom-right",
                              duration: 3000,
                              richColors: true,
                              action: {
                                label: "Close",
                                onClick: () => {}
                              }
                            });
                          }}
                        >
                          <Trash2 className="text-red-600 size-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
        </div>
        <div className="absolute bottom-0 border-2 w-full ">
          <Button className="w-full" variant="outline">
            CheckOut{" "}
            <span className="font-bold">
              {total !== 0
                ? total.toLocaleString("en-EN", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2
                  })
                : "$0"}
            </span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
