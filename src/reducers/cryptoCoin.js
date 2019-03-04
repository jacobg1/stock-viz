const initialState = {
	label: 'type to search or select from list',
	value: 0
}

const cryptoCoin = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CRYPTO_COIN':
			return {
				label: action.label,
				value: action.coin
			}
		default:
			return state
	}
}

export default cryptoCoin
