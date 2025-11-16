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
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<TypeContextValue>({
  setShowDetail: () => {},
  showDetail: false,
  setProductId: () => {},
  productId: 0
});

const ContextProvider = ({ children }: TypePropsChildren) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(0);

  const ContextValue: TypeContextValue = {
    showDetail,
    setShowDetail,
    productId,
    setProductId
  };

  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
