import Head from 'next/head';
//components
import FilterPage from './components/filter-page/index';

const Home = () => {
	return (
		<>
			<Head>
				<title>Filter Page</title>
				<meta name='description' content='Next.js' />
			</Head>
			<main>
				<FilterPage />
			</main>
		</>
	);
};

export default Home;
