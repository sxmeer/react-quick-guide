import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const changeNameAfterSomeTime = createAsyncThunk("name/changeNameAfterSomeTime", async (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ name: "Pam Beesly" });
      } else {
        reject({ message: "couldn't fetch name properly" });
      }
    }, 3000);
  });
});

let slice = createSlice({
  name: "name",
  initialState: {
    name: "Michael Scott",
    error: null,
    status: "idle",
  },
  reducers: {
    changeNameToJim: state => {
      state.name = "Jim Halpert"
    },
    changeNameToDefault: state => {
      state.name = "Michael Scott"
    }
  },
  extraReducers: {
    [changeNameAfterSomeTime.pending]: (state, action) => {
      console.log("pending", action);
      state.status = "pending";
    },
    [changeNameAfterSomeTime.fulfilled]: (state, action) => {
      console.log("successfull", action);
      state.status = "successfull";
      state.name = action.payload.name;
      state.error = null
    },
    [changeNameAfterSomeTime.rejected]: (state, action) => {
      console.log("failed", action);
      state.status = "failed";
      state.error = action.error
    }
  }
});


export default slice.reducer;
export const { changeNameToDefault, changeNameToJim } = slice.actions;