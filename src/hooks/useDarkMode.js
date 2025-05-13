import { useEffect, useState } from 'react';

export default function useDarkMode(defaultValue = false) {
	const [darkMode, setDarkMode] = useState(() => {
		const saved = localStorage.getItem('darkMode');
		return saved ? saved === 'true' : defaultValue;
	});

	useEffect(() => {
		localStorage.setItem('darkMode', darkMode);
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	return [darkMode, toggleDarkMode];
}