import CardStandart from "@/components/card-standard-4";
import { Hero1 } from "@/components/hero1";
import App from "@/components/layouts/App";
import { fetchApiStore } from "@/service/service";
import { useCallback, useEffect, useState } from "react";

const Homepage = () => {
  const [cardCategories, setCardCategories] = useState<[]>([]);

  const fetchData = useCallback(async () => {
    const response = await fetchApiStore("categories");
    setCardCategories(response);
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      await fetchData();
    };
    loadProducts();
  }, [fetchData]);

  return (
    <App>
      <Hero1 />
      <div className="my-10">
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold">Shop By Category</h1>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {cardCategories.map(
            (category: { name: string; image: string; id: number }) => {
              return (
                <div key={category.id}>
                  <CardStandart title={category.name} image={category.image} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </App>
  );
};

export default Homepage;
