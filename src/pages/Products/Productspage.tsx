import App from "@/components/layouts/App";
import CardProduct from "@/components/ui/shadcn-io/card-products";
import DetailCard from "@/components/ui/shadcn-io/detail-card";
import FilterProduct from "@/components/ui/shadcn-io/filter-prodcuts";
import { SkeletonCard } from "@/components/ui/shadcn-io/skeleton-card";
import { Context } from "@/contexts/Context";
import { fetchApiStore } from "@/service/service";
import { useCallback, useContext, useEffect, useState } from "react";

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

interface TypeSelectOpt {
  id: number;
  title: string;
  price: number;
}

const Productspage = () => {
  const { showDetail, products, setProducts, search, selectOpt, checkbox } =
    useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    const response = await fetchApiStore("products");
    setProducts(response);
  }, [setProducts]);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      await fetchData();
      setIsLoading(false);
    };
    loadProducts();
  }, [fetchData]);

  const filterData = products.filter(
    (item: { title: string; category: { name: string } }) => {
      const data =
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (checkbox.length === 0 || checkbox.includes(item.category.name));
      switch (selectOpt) {
        case "low":
          return (
            data &&
            products.sort(
              (a: TypeSelectOpt, b: TypeSelectOpt) => a.price - b.price
            )
          );
        case "high":
          return (
            data &&
            products.sort(
              (a: TypeSelectOpt, b: TypeSelectOpt) => b.price - a.price
            )
          );
        case "asc":
          return (
            data &&
            products.sort((a: TypeSelectOpt, b: TypeSelectOpt) =>
              a.title.localeCompare(b.title)
            )
          );
        case "desc":
          return (
            data &&
            products.sort((a: TypeSelectOpt, b: TypeSelectOpt) =>
              b.title.localeCompare(a.title)
            )
          );
        default:
          return (
            data &&
            products.sort((a: TypeSelectOpt, b: TypeSelectOpt) => a.id - b.id)
          );
      }
    }
  );

  return (
    <App>
      <section className="flex w-full items-start gap-3">
        {/* Filter */}
        <div className="w-1/4">
          <FilterProduct />
        </div>

        {/* Products */}
        <div className="grid grid-cols-4 w-3/4 gap-3">
          {filterData.map((product: TypeProducts) => (
            <div key={product.id}>
              {isLoading ? (
                <SkeletonCard />
              ) : (
                <CardProduct
                  id={product.id}
                  title={product.title}
                  image={product.images[0]}
                  description={product.description}
                  price={product.price}
                  category={product.category.name}
                />
              )}
            </div>
          ))}
        </div>

        {/* Show Detail */}
        {showDetail && (
          <div className="fixed top-0 bottom-0 right-0 left-0 bg-neutral-900/80 z-50 min-h-100 flex justify-center items-center">
            <DetailCard />
          </div>
        )}
      </section>
    </App>
  );
};

export default Productspage;
