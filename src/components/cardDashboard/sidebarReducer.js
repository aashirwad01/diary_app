
export const FILTER_WORK='FILTER_WORK'
export const FILTER_PERSONAL='FILTER_PERSONAL'
export const FILTER_MISTAKES='FILTER_MISTAKES'
export const FILTER_RANDOM='FILTER_RANDOM'
export const FILTER_ALL='FILTER_ALL'


const initialState ={
    data:'all'
}


export default function sidebarReducer(state=initialState,action){
   
    switch (action.type) {
        case FILTER_WORK:
            return{
                ...state,
                data:'work'
            };
            
        case FILTER_PERSONAL:
            return{
                ...state,
                data:'personal'
            }
        case FILTER_MISTAKES:
                return{
                    ...state,
                    data:'mistakes'
                }

        case FILTER_RANDOM:
                    return{
                        ...state,
                        data:'random'
                    }
                
        case FILTER_ALL:
            return{
                ...state,
                data:'all'
            }
    
        default:
            return state;
    }
    
 
}