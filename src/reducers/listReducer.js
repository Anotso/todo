
export default (state = [], action)=>{
    // console.log(state);
    switch (action.type) {
        case "ADD_ITEM":
            console.log(`Valor do payload: ${action.payload}`);
            return [...state, action.payload];
            //NESTE CASO PARA ADD UM NOVO ITEM ELE VAI RECEBER VIA ACTION E INSERIR NO STATE DO REDUCER
        case "DELETE_ITEM":
            return state.filter(item => item.id !== action.payload);
            //ELE RETORNAR TODOS QUE POSSUEM ID DIFERENTE DO QUE FOI INFORMMADO ATRAVÉS DO ACTION.PAYLOAD
        case "CHANGE_DONE":
            return state.map(item =>{
                if(item.id === action.payload){
                    item.done = !item.done;
                }
                return item;
            });
            //MARCA COMO FEITO OU NÃO COM BASE NO ID QUE RETORNOU ATRAVÉS DO ACTION.PAYLOAD
        default:
            return state;
    }
}