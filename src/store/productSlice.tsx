// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   images: string[];
// }

// interface ProductsState {
//   items: Product[];
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
// }

// const initialState: ProductsState = {
//   items: [],
//   status: 'idle',
// };

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//   const response = await fetch('https://dummyjson.com/products');
//   const data = await response.json();
//   return data.products as Product[];
// });

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state) => {
//         state.status = 'failed';
//       });
//   },
// });

// export default productsSlice.reducer;
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface ProductsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products as Product[];
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productsSlice.reducer;

