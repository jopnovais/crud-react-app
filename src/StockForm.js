
import React, { useState } from 'react';

function StockForm({ addStock }) {
	const [symbol, setSymbol] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (symbol) {
			addStock(symbol.trim().toUpperCase());
			setSymbol('');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col sm:flex-row gap-4 mb-6 w-full max-w-xl'
		>
			<input
				type='text'
				value={symbol}
				onChange={(e) => setSymbol(e.target.value)}
				placeholder='Digite o símbolo da ação (ex: AAPL)'
				className='flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-blue-500'
			/>
			<button
				type='submit'
				className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition'
			>
				Adicionar
			</button>
		</form>
	);
}

export default StockForm;
