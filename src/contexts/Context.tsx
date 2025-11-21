import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from "react";

interface TypePropsChildren {
  children?: ReactNode;
}

interface TypeContextValue {
  showDetail: boolean;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
  productId: number;
  setProductId: Dispatch<SetStateAction<number>>;
  products: [];
  setProducts: Dispatch<SetStateAction<[]>>;
  carts: [];
  setCarts: Dispatch<SetStateAction<[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<TypeContextValue>({
  showDetail: false,
  setShowDetail: () => {},
  productId: 0,
  setProductId: () => {},
  products: [],
  setProducts: () => {},
  carts: [],
  setCarts: () => {}
});

const ContextProvider = ({ children }: TypePropsChildren) => {
  const [products, setProducts] = useState<[]>([]);
  const [carts, setCarts] = useState<[]>([]);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(0);

  const ContextValue: TypeContextValue = {
    showDetail,
    setShowDetail,
    productId,
    setProductId,
    products,
    setProducts,
    carts,
    setCarts
  };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
