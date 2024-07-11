import {configureStore} from '@reduxjs/toolkit'
import menuslice from './menuslice'
import cacheslice from './cacheslice'
import commentslice from './commentslice'

const store = configureStore({
    reducer:{
        menu: menuslice,
        cacheresults : cacheslice,
        livechat : commentslice

    }

})

export default store