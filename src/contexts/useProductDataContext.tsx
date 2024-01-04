import React, { createContext, useState } from 'react';
import useFetch from '../custom-hooks/useFetch';
import { Product } from '../interfaces';

interface FormData {
  name: string;
  email: string;
  country: string;
  postalCode: string;
  city: string;
  address: string;
}

interface ProductType {
  data: Product[] | null;
  isLoading: boolean;
  error: string | null;
  setData: React.Dispatch<React.SetStateAction<Product[] | null>>;
  selectedQuantity: number;
  setSelectedQuantity: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  selectedTypeTwo: string | null;
  setSelectedTypeTwo: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ProductContext = createContext<ProductType>({
  data: null,
  isLoading: true,
  error: null,
  setData: () => null,
  selectedQuantity: 1,
  setSelectedQuantity: () => {},
  formData: {
    name: '',
    email: '',
    country: '',
    postalCode: '',
    city: '',
    address: '',
  },
  setFormData: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
  selectedTypeTwo: null,
  setSelectedTypeTwo: () => {},
});

interface Props {
  children: React.ReactNode;
}

const ProductContextConstructor: React.FC<Props> = ({ children }) => {
  const { data, isLoading, error } = useFetch<Product[]>('http://localhost:5001/products');
  const [dataState, setData] = React.useState<Product[] | null>(data);

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedTypeTwo, setSelectedTypeTwo] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
    postalCode: '',
    city: '',
    address: '',
  });

  React.useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <ProductContext.Provider
      value={{
        data: dataState,
        isLoading,
        error,
        setData,
        selectedQuantity,
        setSelectedQuantity,
        formData,
        setFormData,
        totalPrice,
        setTotalPrice,
        selectedTypeTwo,
        setSelectedTypeTwo,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextConstructor;
