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

export const title = "Order Details Sheet";

const SheetCart = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" className="relarive">
        <ShoppingCart />
        <div className="w-4 h-4 bg-neutral-950 rounded-full absolute top-0 right-0 text-neutral-200 text-[10px] flex justify-center items-center p-1">
          1
        </div>
      </Button>
    </SheetTrigger>
    <SheetContent className="bg-neutral-300">
      <SheetHeader className="shadow-sm bg-neutral-100">
        <SheetTitle>Check Out Now !</SheetTitle>
        <SheetDescription>Don't forget click checkout 😜</SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4 relative overflow-y-auto mb-10">
        <Card className="flex flex-row gap-0 w-full p-2">
          <div className="border w-1/3 rounded overflow-hidden">
            <img
              src="https://img.freepik.com/free-psd/floating-white-sneaker-minimalist-shoe-design_191095-80028.jpg?uid=R166627764&ga=GA1.1.1357571563.1761222863&semt=ais_incoming&w=740&q=80"
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-2/3 ">
            <CardHeader>
              <p className="text-xs font-semibold">T-shirt</p>
              <h3 className="font-bold line-clamp-1">T-shirt Hoodie</h3>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <QunatityBtn />
              <div>
                <Button className="bg-transparent border">
                  <Trash2 className="text-red-600 size-5" />
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
      <div className="absolute bottom-0 border-2 w-full ">
        <Button className="w-full" variant="outline">
          Track Shipment
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

export default SheetCart;
