import CardStandart from "@/components/card-standard-4";
import { Hero1 } from "@/components/hero1";
import App from "@/components/layouts/App";
import { Button } from "@/components/ui/button";
import CardProduct from "@/components/ui/shadcn-io/card-products";
import { Context } from "@/contexts/Context";
import { fetchApiStore } from "@/service/service";
import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TypeProducts {
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

const Homepage = () => {
  const [cardCategories, setCardCategories] = useState<[]>([]);
  const { products, setProducts } = useContext(Context);

  const fetchData = useCallback(async () => {
    const response = await fetchApiStore("categories");
    const responseProd = await fetchApiStore("products");
    setCardCategories(response);
    setProducts(responseProd);
  }, [setProducts]);

  useEffect(() => {
    const loadProducts = async () => {
      await fetchData();
    };
    loadProducts();
  }, [fetchData]);

  console.log(products);

  return (
    <App>
      <Hero1 />
      <div className="my-20">
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold">Shop By Category</h1>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {cardCategories
            .slice(0, 5)
            .map((category: { name: string; image: string; id: number }) => {
              return (
                <div key={category.id}>
                  <CardStandart title={category.name} image={category.image} />
                </div>
              );
            })}
        </div>

        <div className="mt-20">
          <div className=" my-10">
            <h1 className="text-3xl font-bold">Featured Shop</h1>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {products.slice(0, 6).map((product: TypeProducts) => (
              <div key={product.id}>
                <CardProduct
                  id={product.id}
                  title={product.title}
                  image={product.images[0]}
                  description={product.description}
                  price={product.price}
                  category={product.category.name}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-5">
            <Button
              variant={"outline"}
              className="border-2 border-neutral-900 rounded-full hover:bg-neutral-900 hover:text-neutral-200 transition-all duration-300"
            >
              <Link to="/products">View all Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </App>
  );
};

export default Homepage;
