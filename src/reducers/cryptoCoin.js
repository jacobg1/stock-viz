const cryptoCoin = (state = {}, action) => {
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
