import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill all fields" };
    }
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return { success: false, message: errorData.message || "Failed to create product" };
      }

      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));

      return { success: true, message: "Product created successfully" };
    } catch (error) {
      return { success: false, message: "An error occurred while creating the product" };
    }
  },

  fetchProducts: async () => {
    try {
      console.log("hi from fetchproducts"); 
      const res = await fetch("/api/products");
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log("Fetched Data:", data); // Debugging output
  
      set({ products: data }); // ✅ Directly use data since it's an array
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ products: [] }); // Prevent undefined state
    }
  }
  ,

  deleteProduct : async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if(!data.success) return {success : false , message : data.message };
    set(state => ({ products : state.products.filter(product => product._id !== pid)}));
    return {success :true , message : data.message}

  },

  updateProduct: async (pid, updatedProduct) => {
    try {
        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });

        const data = await res.json();
        console.log("API Response:", data); // Debugging output

        if (!data.success) {
            return { success: false, message: data.message || "Update failed" };
        }

        set((state) => ({
            products: state.products.map((product) =>
                product._id === pid ? { ...product, ...updatedProduct } : product
            ),
        }));

        return { success: true, message: "Product updated successfully" };
    } catch (error) {
        console.error("Update Error:", error);
        return { success: false, message: "Failed to update product" };
    }
},



}));
