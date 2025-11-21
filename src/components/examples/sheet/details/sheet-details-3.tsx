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
import { useSelector } from "react-redux";
import { type RootState } from "../../../../redux/store.ts";
import { useContext, useEffect, useMemo } from "react";
import { Context } from "@/contexts/Context.tsx";
import { Badge } from "@/components/ui/badge.tsx";

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
  const { products, carts, setCarts } = useContext(Context);
  const cart = useSelector((state: RootState) => state.cart.data);

  useEffect(() => {
    const itemInCart = cart.map((c: { id: number }) => {
      return products.find((prod: { id: number }) => prod.id === c.id);
    });
    setCarts(itemInCart);
  }, [cart, products, setCarts]);

  const total = useMemo(() => {
    if (carts.length === 0) return 0;
    const sumQty = cart.reduce(
      (acc: number, cur: { qty: number }) => acc + cur.qty,
      0
    );
    const sumPrice = carts.reduce(
      (acc: number, cur: { price: number }) => acc + (cur?.price || 0),
      0
    );
    return sumQty * sumPrice;
  }, [cart, carts]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relarive">
          <ShoppingCart />
          {carts.length > 0 && (
            <div className="w-4 h-4 bg-neutral-950 rounded-full absolute top-0 right-0 text-neutral-200 text-[10px] flex justify-center items-center p-1">
              {carts.length}
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
          {carts.length > 0 &&
            carts.map((item: TypeCart, index) => (
              <Card className="flex flex-row gap-0 w-full p-2" key={index}>
                <div className="w-1/3 rounded overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between">
                  <CardHeader className="flex flex-col gap-0">
                    <Badge
                      variant={"default"}
                      className="text-[10px] font-semibold"
                    >
                      {item.category.name}
                    </Badge>
                    <h3 className="font-bold line-clamp-1">{item.title}</h3>
                    <p className="text-xs">
                      {item.price?.toLocaleString("en-EN", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2
                      })}
                    </p>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <QunatityBtn qty={0} />
                    <div>
                      <Button className="bg-transparent border hover:bg-neutral-100">
                        <Trash2 className="text-red-600 size-5" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
        </div>
        <div className="absolute bottom-0 border-2 w-full ">
          <Button className="w-full" variant="outline">
            Track Shipment{" "}
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
