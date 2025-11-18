import { Card } from "../../card";
import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "@/contexts/Context";
import { fetchApiStore } from "@/service/service";
import { EyeOff, ShoppingBasket } from "lucide-react";
import { SpinnerEmpty } from "../spinner-empty";

interface TypeProduct {
  title?: string;
  images: string[];
  price: number;
  description: string;
}

export default function DetailCard() {
  const { productId } = useContext(Context);
  const [product, setProduct] = useState<TypeProduct>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    const response = await fetchApiStore(`products/${productId}`);
    setProduct(response);
  }, [productId]);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      await fetchData();
      setIsLoading(false);
    };
    loadProducts();
  }, [fetchData]);
  const { setShowDetail } = useContext(Context);

  return (
    <>
      {isLoading ? (
        <Card className="flex flex-row p-0 overflow-hidden w-1/2">
          <SpinnerEmpty />
        </Card>
      ) : (
        <Card className="flex flex-row p-0 overflow-hidden w-2/3">
          <div className="flex-none w-80 relative scale-100">
            <img
              src={product?.images[0]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900 gap-1">
                {product?.title}
              </h1>
              <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                {product?.price.toLocaleString("en-EN", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2
                })}
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 text-sm text-neutral-950">
              <p>{product?.description}</p>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-neutral-900 text-neutral-100 w-full flex justify-center items-center gap-1 cursor-pointer hover hover:bg-neutral-950 transition-all duration-300"
                  type="submit"
                >
                  <ShoppingBasket size={15} />
                  Add to Cart
                </button>
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 w-full flex justify-center items-center gap-1 cursor-pointer hover:bg-neutral-100 transition-all duration-300"
                  type="button"
                  onClick={() => setShowDetail((prev) => !prev)}
                >
                  <EyeOff size={15} />
                  Hide Detail
                </button>
              </div>
            </div>
            <p className="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </Card>
      )}
    </>
  );
}
