import { create } from "zustand";

const useCartStore = create(() => ({
  carts: [
    {
      id: 1,
      productId: 2,
      quantity: 2,
    },
    {
      id: 2,
      productId: 6,
      quantity: 1,
    },
  ],
}));

export default useCartStore;
