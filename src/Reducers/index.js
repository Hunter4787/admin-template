import {combineReducers} from 'redux'
import packReducer from './packReducer'
import expReducer from './expReducer'
import packAnnonceReducer from './packAnnonceReducer'
import annonceReducer from './annonceReducer'
import sousCategoryReducer from './sousCategoryReducer'
import userReducer from './userReducer'
import imageReducer from './imageReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
    packReducer,
    userReducer,
    categoryReducer,
    sousCategoryReducer,
    annonceReducer,
    expReducer,
    packAnnonceReducer,
    imageReducer
})
