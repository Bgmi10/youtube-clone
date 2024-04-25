import {configureStore} from '@reduxjs/toolkit'
import menuslice from './menuslice'

const store = configureStore({
    reducer:{
        menu: menuslice,

    }

})

export default store