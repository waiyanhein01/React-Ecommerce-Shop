import { create } from "zustand";

const useCartStore = create((set) => ({
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

  incrementCartBtn: (id) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      ),
  })),

  decrementCartBtn: (id) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      ),
  })),

  cartQuantityDelete: (id) => set((state) => ({
    carts: state.carts.filter((el) => el.id !== id )
  }))
}));

export default useCartStore;
