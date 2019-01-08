import postReducer from './postReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    post: postReducer,
    auth: authReducer,
    firestore: firestoreReducer
});

export default rootReducer;