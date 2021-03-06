import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from 'screens'
import { IAppState } from 'store/types'
import product from 'store/product/reducer'
import app from 'store/app/reducer'

const nav = createNavigationReducer(AppNavigator)

export default combineReducers<IAppState>({
  nav,
  app,
  product,
})
