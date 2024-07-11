import {configureStore} from '@reduxjs/toolkit'
import menuslice from './menuslice'
import cacheslice from './cacheslice'

const store = configureStore({
    reducer:{
        menu: menuslice,
        cacheresults : cacheslice

    }

})

export default store