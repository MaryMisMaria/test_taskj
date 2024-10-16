
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		// Додаткові ефекти, наприклад, ініціалізація аналітики
		console.log('App mounted');
	}, []);

	return <Component {...pageProps} />; // Рендеримо сторінку
}

export default MyApp;
