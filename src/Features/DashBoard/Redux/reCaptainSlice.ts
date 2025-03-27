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
};

export const fetchWorUsers = createAsyncThunk<
  WorUser[],
  void,
  { rejectValue: string }
>("userDashboard/fetchWorUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await API.get("/reg-captain/captains");
    // console.log("reg-captin", response?.data);

    return response.data as WorUser[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching wor-user data:", error);
    return rejectWithValue(error.response?.data || "Wor User Fetching Failed");
  }
});

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
        (state, action: PayloadAction<WorUser[]>) => {
          state.worUsers = action.payload;

          const storedUser = localStorage.getItem("worUser");
          // console.log("storedUser", storedUser);

          let parsedUser: WorUser | null = storedUser
            ? JSON.parse(storedUser)
            : null;

          // if (!storedUser) {
          //   console.log("No user found in localStorage");
          // } else {
          //   try {
          //     const parsedUser: WorUser = JSON.parse(storedUser);
          //     // console.log("Parsed User:", parsedUser);
          //   } catch (error) {
          //     console.error("Error parsing JSON:", error);
          //   }
          // }

          if (parsedUser) {
            // Try to find the latest version of the stored user in the fetched data
            const updatedUser = action.payload.find(
              (user) => user._id === parsedUser._id
            );

            if (updatedUser) {
              state.worUser = updatedUser;
            } else {
              state.worUser = parsedUser;
            }
          } else {
            state.worUser =
              action.payload.find((user) => !user.userVerified) ?? null;
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
