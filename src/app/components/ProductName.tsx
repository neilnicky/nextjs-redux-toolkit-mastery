"use client";

import { useRef } from "react";
import {
  initializeProduct,
  Product,
  setProductName,
} from "@/store/slices/productSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";

export default function ProductName({ product }: { product: Product }) {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(initializeProduct(product));
    initialized.current = true;
  }
  const prod = useAppSelector((state) => state.product.product);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col">
      <input
        value={prod?.name}
        onChange={(e) => dispatch(setProductName(e.target.value))}
      />
      <p>{prod?.name}</p>
      {/* {JSON.stringify(prod?.id)}
      {JSON.stringify(prod?.name)}
      {JSON.stringify(prod)} */}
    </div>
  );
}
