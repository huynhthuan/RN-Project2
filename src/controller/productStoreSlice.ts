import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import {IDataCoffee} from '../screen/Menu';

type Book = {bookId: string; title: string};

const productsAdapter = createEntityAdapter<IDataCoffee>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: product => product.id,
});

const productsSlice = createSlice({
  name: 'productStore',
  initialState: productsAdapter.getInitialState(),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    productAdd: productsAdapter.addOne,
    productsReceived(state, action: PayloadAction<{products: IDataCoffee[]}>) {
      // Or, call them as "mutating" helpers in a case reducer
      productsAdapter.setAll(state, action.payload.products);
    },
  },
});

export default productsSlice.reducer;
export const {productAdd, productsReceived} = productsSlice.actions;
