import { takeLatest, select } from 'redux-saga/effects'
import { AppState } from '../../types'

/* Saves the added countries to the localStorage */
function* saveLocalState() {
  const state: AppState = yield select()
  yield localStorage.setItem('state', JSON.stringify(state))
}

export default [takeLatest('*', saveLocalState)]
