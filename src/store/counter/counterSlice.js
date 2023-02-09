import { createSlice } from '@reduxjs/toolkit'
// 슬라이스 - 툴킷 세팅을 쉽게 해주는 방법  리듀서와 액션크리에이터를 합쳐서 세팅 해놓은 것. 
const initialState = {
    value : 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      //Immer 함수가 있어서, state풀지 않아도 됨. 
        state.value += action.payload;    
    },
    decrement: (state, action) => {
        state.value -= action.payload;
    },

    
  }
})

export const { increment, decrement } = counterSlice.actions //액션 생성함수 자동 리턴.
export default counterSlice.reducer