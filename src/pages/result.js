// ui
import { Box, PageTitle} from '../ui';

const ResultPage = ({ make, year }) => {
	return (
		<Box>
			<PageTitle>Result for search car - {make} {year}</PageTitle>
		</Box>
	);
};

export async function getServerSideProps(context) {
	const { make, year } = context.query;
	return {
		props: { make, year },
	};
}

export default ResultPage;
