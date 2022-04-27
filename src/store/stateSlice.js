import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUser } from "../api/authAPI"



const initialState = {
    user: {
        name: '',
        role: ''
    },
    loading: false,
}

export const appStateAsync = createAsyncThunk(
    'appState/getUser',
    async (fakeAuthData) => {
        const response = await getUser(fakeAuthData)
        return response.user;
    }
)

const stateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: { // Conjunto de acciones síncronas
        logout: (state) => {
            state.user = {name: '', role: ''}
        }
    },
    extraReducers: (builder) => { // Conjunto de acciones asíncronas
        builder.addCase(appStateAsync.pending, (state) => {
                    state.loading = true;
                })
               .addCase(appStateAsync.fulfilled, (state, action) => {
                    state.loading = false;
                    state.user = action.payload // En payload van los datos de la acción en este caso user
               })
    }
})

export const {logout} = stateSlice.actions;

export const selectUser = (state) => state.appState.user;
export const selectLoading = (state) => state.appState.loading;

export default stateSlice.reducer;