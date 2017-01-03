
export const saleRecord = (state ={} , action = {}) => {
            return state
}


export const Test = (state ={} , action) => {
	switch(action.type){
		case "Change":
		return {
			...state,
			text:action.number,
		};
		default:
			return state;
	}
}

