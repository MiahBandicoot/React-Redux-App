import axios from 'axios'
export const ADDPOKE = 'ADDPOKE'
export const ADDPOKESUS = 'ADDPOKESUS'
export const POKEFAIL = 'POKEFAIL'
export const addPoke = () => (dispatch) =>{
    dispatch({type:ADDPOKE})
    axios.get('https://pokeapi.co/api/v2/pokemon-species/?offset=151&limit=27/results')
    .then(res =>{
        
        dispatch({type:ADDPOKESUS, payload:res.data.results})
        console.log(res.data)
    })
    .catch(error=>{
        dispatch({type:POKEFAIL, payload:error})
    })
} 