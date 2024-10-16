import * as R from 'ramda';
import Select from 'react-select';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
//ui
import { Box, Button, FlexBox, Label, PageTitle } from '../../../ui/index';

const VehicleSelector = () => {
	const router = useRouter();
	const [makes, setMakes] = useState([]);
	const [selectedMake, setSelectedMake] = useState(null);
	const [selectedYear, setSelectedYear] = useState(null);

	const currentYear = new Date().getFullYear();
	const years = R.map(R.add(2015), R.range(0, currentYear - 2015 + 1));

	const isNextButtonDisabled = R.or(R.equals(selectedMake, null), R.equals(selectedYear, null));

	useEffect(() => {
		const fetchMakes = async () => {
			try {
				const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
				const data = await response.json();
				setMakes(data.Results || []);
			} catch (error) {
				console.error('Error fetching vehicle makes:', error);
			}
		};

		fetchMakes();
	}, []);

	const handleNextClick = () => {
		if (!isNextButtonDisabled) {
			router.push({
				pathname: '/result',
				query: { make: selectedMake.value, year: selectedYear.value }
			});
		}
	};

	return (
		<Box width='100%'>
			<FlexBox flexDirection='column'>
					<Label htmlFor='make'>Select Vehicle</Label>
					<Select
						id='make'
						value={selectedMake}
						onChange={setSelectedMake}
						options={makes.map(({ MakeId, MakeName }) => ({
							value: MakeName,
							label: `${MakeId} ${MakeName}`,
						}))}
						placeholder="--Select Make--"
					/>
				<FlexBox mt={2} width={{ xs: 300, md: 500 }} justifyContnt='center' alignItems='center'>
					<Label htmlFor='year'>Model Year:</Label>
					<Select
						id='year'
						value={selectedYear}
						onChange={setSelectedYear}
						options={years.map((year) => ({
							value: year,
							label: year,
						}))}
						placeholder="--Select Year--"
					/>
				</FlexBox>
			</FlexBox>
			<FlexBox mt={2} width='100%' justifyContent='center' alignItems='center'>
				<Button
					mt={3}
					height={50}
					color='black'
					borderRadius={28}
					border='1px solid'
					onClick={handleNextClick}
					width={{ xs: 250, sm: 500 }}
					disabled={isNextButtonDisabled}
					fontSize={{ xs: '14px', lg: '16px' }}
				>
					Next
				</Button>
			</FlexBox>
		</Box>
	);
};

const FilterPage = () => {
	return (
		<Box>
			<PageTitle
				color='black'
				fontWeight={600}
				textAlign='center'
				mb={{ xs: 24, lg: 32 }}
				fontSize={{ xs: '40px', lg: '48px' }}
			>
				Filter Page
			</PageTitle>
			<FlexBox>
				<VehicleSelector />
			</FlexBox>
		</Box>
	);
};

export default FilterPage;
