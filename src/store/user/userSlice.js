import { createSlice } from '@reduxjs/toolkit'
// 슬라이스 - 툴킷 세팅을 쉽게 해주는 방법  리듀서와 액션크리에이터를 합쳐서 세팅 해놓은 것. 
const initialState = {
    value: false, 
}

const userSlice = createSlice({
  name: 'user', //리듀서 이름
  initialState, // 데이터 초기값
  reducers: { // 상태각 변하면 어떻게 실행될지 저장하는 
    login: (state, action) => {
      state.value = action.payload

    },
    logout: (state, action) => {
      state.value = action.payload

    },

    
  }
})

export const { login, logout } = userSlice.actions //액션 생성함수 자동 리턴.
export default userSlice.reducer