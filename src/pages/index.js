import Head from 'next/head';
import FilterPage from './components/filter-page/index';

const Home = () => {
	return (
		<>
			<Head>
				<title>Головна Сторінка</title>
				<meta name='description' content='Це приклад головної сторінки в Next.js' />
			</Head>
			<main>
				<FilterPage />
			</main>
		</>
	);
};

export default Home;
