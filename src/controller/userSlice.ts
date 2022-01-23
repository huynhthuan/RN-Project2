import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit';
export interface IUserState {
  userInfo: {
    name: string;
    id: string;
    phoneNumber: string;
    userName: string;
  };
  isLogin: boolean;
}

const initialState: IUserState = {
  userInfo: {
    name: 'Hahah',
    id: 'Xsadf123',
    phoneNumber: '0915321151',
    userName: '@_haha',
  },
  isLogin: true,
};

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<IUserState>) => {},
    logout: state => {
      state.isLogin = false;
      state.userInfo = initialState.userInfo;
    },
    login: (state, action: PayloadAction<IUserState>) => {
      state.userInfo = action.payload.userInfo;
      state.isLogin = true;
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.userInfo.name = action.payload;
    },
  },
});

export const {updateUser, logout, login, updateName} = userSlice.actions;

export default userSlice.reducer;
