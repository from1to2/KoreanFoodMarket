import { createSlice } from '@reduxjs/toolkit'
import Product from '../../assets/ProductList.json';
// 슬라이스 - 툴킷 세팅을 쉽게 해주는 방법  리듀서와 액션크리에이터를 합쳐서 세팅 해놓은 것. 
const initialState = Product.productList;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addCart: (state, action) => {
        console.log('hihi');
    },

    
  }
})

export const { addCart } = productSlice.actions //액션 생성함수 자동 리턴.
export default productSlice.reducer