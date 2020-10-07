import {ADDPOKE, ADDPOKESUS, POKEFAIL} from './action'

export const initialState={
    pokemon: [],
    loader: true,
    error: ''
}
 const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADDPOKE:
            return{
                ...state,
                loader:true,
                error:''
            }
        case ADDPOKESUS:
            return{
                ...state,
                pokemon:action.payload ,
                loader:false,
                error:''
            }


        case POKEFAIL:
            return{
                error:action.payload
            }
            

        default:
            return state
    }
}
export default reducer