import { createStore } from 'redux';
import teacherReducer from './teacher/teacherReducer'

const storeTeacher = createStore(teacherReducer);

export default storeTeacher;