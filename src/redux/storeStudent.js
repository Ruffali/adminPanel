import { createStore } from 'redux';
import studentReducer from './stundent/stundentReducer';

const storeStudent = createStore(studentReducer);

export default storeStudent;