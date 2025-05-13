import React from 'react';

function StockList({ stocks = [], removeStock, updateStockData }) {
	const handleUpdate = async (symbol) => {
		updateStockData(symbol, null, true);
		try {
			const res = await fetch(
				`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=7LW8JNWMORBVPVVC`
			);
			const json = await res.json();
			const data = json['Global Quote'];
			if (Object.keys(data).length === 0) {
				alert('Nenhum dado encontrado.');
				updateStockData(symbol, null, false);
				return;
			}
			updateStockData(symbol, data, false);
		} catch {
			alert('Erro ao atualizar dados.');
			updateStockData(symbol, null, false);
		}
	};

	return (
		<div className='w-full max-w-xl space-y-4'>
			{stocks.map((stock) => (
				<div
					key={stock.symbol}
					className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 flex justify-between items-center'
				>
					<div className='flex-1'>
						<p className='text-xl font-semibold'>{stock.symbol}</p>
						{stock.loading ? (
							<p className='text-yellow-500'>Carregando...</p>
						) : stock.data ? (
							<div className='text-sm mt-2'>
								<p>
									<strong>Preço:</strong> $
									{parseFloat(stock.data['05. price']).toFixed(2)}
								</p>
								<p>
									<strong>Variação:</strong> {stock.data['10. change percent']}
								</p>
								<p>
									<strong>Alta do dia:</strong> ${stock.data['03. high']}
								</p>
								<p>
									<strong>Baixa do dia:</strong> ${stock.data['04. low']}
								</p>
								<p>
									<strong>Volume:</strong> {stock.data['06. volume']}
								</p>
							</div>
						) : (
							<p className='text-gray-500'>Sem dados</p>
						)}
					</div>
					<div className='flex flex-col space-y-2 ml-4'>
						<button
							onClick={() => handleUpdate(stock.symbol)}
							className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
						>
							Atualizar
						</button>
						<button
							onClick={() => removeStock(stock.symbol)}
							className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
						>
							Remover
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default StockList;
