import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "../../../Core/url";
import { AuthState, LoginResponse, LoginUserData } from "../Types/authTypes";

// Thunk for user login
export const userLogin = createAsyncThunk<
  LoginResponse, // Return type of fulfilled action
  { userData: LoginUserData }, // Input argument to the thunk
  { rejectValue: string } // Type of rejected action's payload (error message)
>("auth/login", async ({ userData }, { rejectWithValue }) => {
  try {
    const response = await API.post("/manager/login", userData);
    console.log("LoginSlice response:", response);
    return response.data;
  } catch (error: any) {
    console.log("LoginSlice error:", error?.response?.data);
    if (error?.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue(error.message);
  }
});

// Initial state with correct typing
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.error = null;

      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },

    setTokenFromStorage: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userLogin.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;

          localStorage.setItem("token", action.payload.token);

          state.token = action.payload.token;
          state.error = null;
        }
      )
      .addCase(
        userLogin.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "An error occurred";
        }
      );
  },
});

// Export actions and reducer
export const { logout, setTokenFromStorage } = tokenSlice.actions;
export default tokenSlice.reducer;
