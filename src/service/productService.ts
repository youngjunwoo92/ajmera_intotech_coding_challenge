import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Product } from '../type/product.type';
import axiosClient from './axiosClient';

export async function getProducts() {
  const res = await axiosClient.get<Product[]>('products');
  return res.data;
}

export async function getProduct(id: number) {
  const res = await axiosClient.get<Product>(`products/${id}`);
  return res.data;
}

export function useGetProducts() {
  return useQuery<Product[], AxiosError>({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });
}

export function useGetProduct(id: number) {
  return useQuery<Product, AxiosError>({
    queryKey: ['products', id],
    queryFn: () => getProduct(id),
  });
}
