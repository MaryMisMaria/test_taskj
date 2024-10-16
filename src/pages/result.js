const ResultPage = ({ make, year }) => {
	return (
		<div>
			<h1>Choose Car - {make} - {year}</h1>
		</div>
	);
};

export async function generateStaticParams(context) {
	const { make, year } = context.query;
	return {
		props: { make, year },
	};
}

export default ResultPage;
