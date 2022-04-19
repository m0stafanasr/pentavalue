import {Get_Data} from '../actions/actions'

const initialState= {
    mainData:"no data"
 }

export function reducer(state = initialState, action?){
    switch(action.type){
        case Get_Data:
            return {
                ...state,
            mainData:'' }
    }
    return state
}