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
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  selectOpt: string;
  setSelectOpt: Dispatch<SetStateAction<string>>;
  checkbox: [];
  setCheckbox: Dispatch<SetStateAction<[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<TypeContextValue>({
  showDetail: false,
  setShowDetail: () => {},
  productId: 0,
  setProductId: () => {},
  products: [],
  setProducts: () => {},
  search: "",
  setSearch: () => {},
  selectOpt: "",
  setSelectOpt: () => {},
  checkbox: [],
  setCheckbox: () => {}
});

const ContextProvider = ({ children }: TypePropsChildren) => {
  const [products, setProducts] = useState<[]>([]);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [selectOpt, setSelectOpt] = useState<string>("");
  const [checkbox, setCheckbox] = useState<[]>([]);

  const ContextValue: TypeContextValue = {
    showDetail,
    setShowDetail,
    productId,
    setProductId,
    products,
    setProducts,
    search,
    setSearch,
    selectOpt,
    setSelectOpt,
    checkbox,
    setCheckbox
  };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
