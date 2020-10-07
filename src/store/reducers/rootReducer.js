import { combineReducers } from 'redux'
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import topProductsReducer from './topProductsReducer'

const rootReducer = combineReducers(
    {
        auth:authReducer,
        project:projectReducer,
        topProduct:topProductsReducer
    }
)

export default rootReducer