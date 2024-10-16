import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => (
	<Html lang='uk'>
		<Head>
			<meta name='description' content='Це приклад документа Next.js' />
			<link rel='icon' href='/favicon.ico' />
			<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' />
		</Head>
		<body>
		<Main />
		<NextScript />
		</body>
	</Html>
);

export default MyDocument;
