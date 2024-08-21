import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [
    { id: 0, name: "all", isActive: true },
    { id: 1, name: "basketball", isActive: false },
    { id: 2, name: "lifestyle", isActive: false },
    { id: 3, name: "running", isActive: false },
    { id: 4, name: "electronics", isActive: false },
    { id: 5, name: "jewelery", isActive: false },
    { id: 6, name: "men's clothing", isActive: false },
    { id: 7, name: "women's clothing", isActive: false },
  ],
  activeCategoryBtn: (categoryId) =>
    set((state) => ({
      categories: state.categories.map((el) =>
        el.id === categoryId
          ? {...el, isActive : true}
          : {...el, isActive: false}
      ),
    })),
}));

export default useCategoryStore;
