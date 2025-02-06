
import { ISearchData } from "@/interfaces/doc.interfaces";
import { createSlice } from "@reduxjs/toolkit";



const initialState: ISearchData = {    
    project: '',
    category: '',
    subCategory: '',    
};

const searchDataSlice = createSlice({
    name: 'searchData',
    initialState,
    reducers: {
       setData(state, action) {
            state = action.payload; 
            return state;          
       }
    }
});

export const { setData } = searchDataSlice.actions;
export default searchDataSlice.reducer;