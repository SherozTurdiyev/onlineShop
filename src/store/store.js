import {configureStore} from '@reduxjs/toolkit'
import cateogoryReducer from './reducer/category'
import korzinka from './reducer/korzinka'
export default configureStore({
    reducer: {
        bascet: cateogoryReducer,
        korzink: korzinka,
    }
})