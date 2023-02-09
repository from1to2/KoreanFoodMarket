import { createSlice } from '@reduxjs/toolkit'
// 슬라이스 - 툴킷 세팅을 쉽게 해주는 방법  리듀서와 액션크리에이터를 합쳐서 세팅 해놓은 것. 
const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
        const equalItem = state.findIndex(item  => item.id === action.payload.id);
        if(equalItem>=0) {
            alert('장바구니에 동일한 상품이 있습니다.')
        }else {
            state = state.push(action.payload);
        }
    },
    deleteCart: (state, action) => {
      const equalItem = state.findIndex(item  => item.id === action.payload.id);
        if(equalItem>=0) state.splice(equalItem,1);
        
        //기존 state 배열, action.payload와 같은 아이디를 찾아서 삭제하고 삭제된 나머지를 반환 splice()
    },

    
  }
})

export const { addCart, deleteCart } = cartSlice.actions //액션 생성함수 자동 리턴.
export default cartSlice.reducer