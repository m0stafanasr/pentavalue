import {Edit_Data, Add_Data, Delete_Data} from '../actions/actions'
const initialState= {
    mainData:[]
 }

export function reducer(state = initialState, action?){

    switch(action.type){
        case Edit_Data:
            return {
                ...state,
            mainData:action.payload }
            case Add_Data:
                return{
                    ...state,
                    mainData:state.mainData.push(action.payload)
                }
                case Delete_Data:
                return{
                    ...state,
                    mainData:state.mainData.filter(el=> el.id!=action.payload)
                }
    }
    return state
}