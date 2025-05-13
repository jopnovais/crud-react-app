import React, { useState } from 'react';
import StockForm from './StockForm';
import StockList from './StockList';
import axios from 'axios';
import useDarkMode from './hooks/useDarkMode';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
	const [stocks, setStocks] = useState([]);
	const [darkMode, toggleDarkMode] = useDarkMode();

	const fetchStockData = async (symbol) => {
		try {
			const res = await axios.get('https://www.alphavantage.co/query', {
				params: {
					function: 'GLOBAL_QUOTE',
					symbol,
					apikey: API_KEY,
				},
			});
			const data = res.data['Global Quote'];
			if (Object.keys(data).length === 0) {
				alert('Nenhum dado encontrado. Verifique o símbolo.');
				return null;
			}
			return data;
		} catch (error) {
			alert('Erro ao buscar dados da ação.');
			return null;
		}
	};

	const addStock = async (symbol) => {
		if (!stocks.some((s) => s.symbol === symbol)) {
			setStocks((prev) => [...prev, { symbol, data: null, loading: true }]);
			const data = await fetchStockData(symbol);
			updateStockData(symbol, data, false);
		}
	};

	const updateStockData = (symbol, data, loading = false) => {
		setStocks((prev) =>
			prev.map((s) => (s.symbol === symbol ? { ...s, data, loading } : s))
		);
	};

	const removeStock = (symbol) => {
		setStocks((prev) => prev.filter((s) => s.symbol !== symbol));
	};

	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-6 transition-colors duration-300'>
				<h1 className='text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300'>
					📈 Monitor de Ações
				</h1>
				<button
					onClick={toggleDarkMode}
					className='mb-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
				>
					{darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
				</button>
				<StockForm addStock={addStock} />
				<StockList
					stocks={stocks}
					removeStock={removeStock}
					updateStockData={(symbol, data) =>
						updateStockData(symbol, data, false)
					}
				/>
			</div>
		</div>
	);
}

export default App;