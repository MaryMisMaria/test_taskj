// pages/index.js
import Head from 'next/head'; // Імпорт для управління заголовками сторінки
import Link from 'next/link';   // Імпорт для навігації між сторінками

const Home = () => {
	return (
		<>
			<Head>
				<title>Головна Сторінка</title>
				<meta name="description" content="Це приклад головної сторінки в Next.js" />
			</Head>
			<main>
				<h1>Ласкаво просимо до мого Next.js додатку!</h1>
				<p>Це приклад базової сторінки.</p>
				<Link href="/about">Дізнайтеся більше про нас</Link>
			</main>
		</>
	);
};

export default Home;
