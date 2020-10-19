import { ADD_CLASS } from './teacherTypes';

const initialState = {
    teachers: [
        {
            id: '001',
            name: 'Samir',
            surname: 'Seyfullayev',
            email: 'samir@gmail.com',
            phone: '0554444548',
            img: 'man01'
        },
        {
            id: '002',
            name: 'Solmaz',
            surname: 'Ahmedova',
            email: 'solmaz@gmail.com',
            phone: '0558641834',
            img: 'women01'
        },
        {
            id: '003',
            name: 'Fazil',
            surname: 'Qenberov',
            email: 'fazil@gmail.com',
            phone: '0557898581',
            img: 'man02'
        },
        {
            id: '004',
            name: 'Fatma',
            surname: 'Xelilova',
            email: 'fatma@gmail.com',
            phone: '0552446532',
            img: 'women02'
        },
        {
            id: '005',
            name: 'Mirza',
            surname: 'Aghasiyev',
            email: 'mirza@gmail.com',
            phone: '0553361296',
            img: 'man03'
        },
        {
            id: '006',
            name: 'Sekine',
            surname: 'Quliyeva',
            email: 'sekine@gmail.com',
            phone: '0557120004',
            img: 'women03'
        },
        {
            id: '007',
            name: 'Amid',
            surname: 'Fazil ohghlu',
            email: 'amid@gmail.com',
            phone: '0552849614',
            img: 'man04'
        },
        {
            id: '008',
            name: 'Irade',
            surname: 'Zeynalova',
            email: 'irade@gmail.com',
            phone: '0555734962',
            img: 'women04'
        },
        {
            id: '009',
            name: 'Akshin',
            surname: 'Eyvazov',
            email: 'akshin@gmail.com',
            phone: '0559475555',
            img: 'man05'
        },
        {
            id: '010',
            name: 'Rahide',
            surname: 'Sevincli',
            email: 'rahide@gmail.com',
            phone: '0557426398',
            img: 'women05'
        }
    ],
    numOfClasses: 20
}

const teacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLASS: return {
            ...state,
            numOfClasses: state.numOfClasses + 1
        }
        default: return state
    }
}

export default teacherReducer;