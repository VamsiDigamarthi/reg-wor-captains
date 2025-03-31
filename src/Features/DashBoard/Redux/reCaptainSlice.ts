import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { WorUser } from "../Types/regCaptain.type";
import { API } from "../../../Core/url";

interface UserDashboardState {
  worUsers: WorUser[];
  worUser: WorUser | null;
  loading: boolean;
  error: string | null;
  verifiedUsers: {
    approvedUsers: number;
    pendingUsers: number;
  };
  totalPages: number;
  currentPage: number;
  totalCaptains: number;
}

const initialState: UserDashboardState = {
  worUsers: [],
  worUser: null,
  verifiedUsers: {
    approvedUsers: 0,
    pendingUsers: 0,
  },
  loading: false,
  error: null,
  totalPages: 0,
  currentPage: 0,
  totalCaptains: 0,
};

// ✅ Corrected Type Definition
export const fetchWorUsers = createAsyncThunk<
  {
    data: WorUser[];
    totalPages: number;
    currentPage: number;
    totalCaptains: number;
  }, // Return type
  { page: number; limit: number }, // Arguments type
  { rejectValue: string } // Rejection type
>(
  "userDashboard/fetchWorUsers",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await API.get(
        `/reg-captain/captains?page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error: any) {
      console.error("Error fetching wor-user data:", error);
      return rejectWithValue(
        error.response?.data || "Wor User Fetching Failed"
      );
    }
  }
);

const userDashboardSlice = createSlice({
  name: "userDashboard",
  initialState,
  reducers: {
    setVerifiedUsers: (
      state,
      action: PayloadAction<{ approvedUsers: number; pendingUsers: number }>
    ) => {
      state.verifiedUsers = action.payload;
    },

    setWorUser: (state, action: PayloadAction<WorUser>) => {
      state.worUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWorUsers.fulfilled,
        (
          state,
          action: PayloadAction<{
            data: WorUser[];
            totalPages: number;
            currentPage: number;
            totalCaptains: number;
          }>
        ) => {
          state.worUsers = action.payload.data; // ✅ Ensure data is correctly accessed
          state.totalPages = action.payload.totalPages;
          state.currentPage = action.payload.currentPage;
          state.totalCaptains = action.payload.totalCaptains;

          const storedUser = localStorage.getItem("worUser");
          let parsedUser: WorUser | null = storedUser
            ? JSON.parse(storedUser)
            : null;

          if (parsedUser) {
            const updatedUser = action.payload.data.find(
              (user) => user._id === parsedUser._id
            );

            state.worUser = updatedUser || parsedUser;
          } else {
            state.worUser =
              action.payload.data.find((user) => !user.userVerified) ?? null;
          }

          state.loading = false;
        }
      )
      .addCase(fetchWorUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch wor users";
      });
  },
});

export const { setVerifiedUsers, setWorUser } = userDashboardSlice.actions;
export default userDashboardSlice.reducer;
