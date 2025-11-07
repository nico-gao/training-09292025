import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = [
  {
    make: "Toyota",
    quantity: 10,
    id: 1,
  },
  {
    make: "Honda",
    quantity: 10,
    id: 2,
  },
  {
    make: "Nissan",
    quantity: 10,
    id: 3,
  },
];

export const fetchInitialCarData = createAsyncThunk(
  "car/fetchInitialCarData",
  async () => {
    const response = new Promise((resolve) => {
      setTimeout(() => {
        resolve(initialState);
      }, 2000);
    });
    return response;
  }
);

const rtkCarSlice = createSlice({
  name: "car",
  initialState: {
    cars: [],
    loading: false,
  },
  reducers: {
    sellCar(state, action) {
      const car = state.cars.find((car) => car.id === action.payload);
      car.quantity -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialCarData.fulfilled, (state, action) => {
      console.log("thunk action fulfilled", state, action);
      state.cars = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchInitialCarData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInitialCarData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { sellCar } = rtkCarSlice.actions;
export default rtkCarSlice.reducer;
