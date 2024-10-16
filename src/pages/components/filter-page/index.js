import { useState, useEffect } from 'react';
//ui
import {Box, Button, FlexBox, h2Title, PageTitle} from '../../../ui/index';
import * as R from "ramda";
import {useRouter} from "next/router";


const VehicleSelector = () => {
	const router = useRouter();
	const [makes, setMakes] = useState([]);
	const [selectedMake, setSelectedMake] = useState('');
	const [selectedYear, setSelectedYear] = useState('');

	const currentYear = new Date().getFullYear();

	const years = Array.from({ length: currentYear - 2014 }, (_, index) => 2015 + index);

	const isNextButtonDisabled = R.or(R.equals(selectedMake,''), R.equals(selectedYear, ''));

	useEffect(() => {
		const fetchMakes = async () => {
			try {
				const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
				const data = await response.json();
				setMakes(data.Results || []); // Встановлюємо отримані дані в state
			} catch (error) {
				console.error('Error fetching vehicle makes:', error);
			}
		};

		fetchMakes().then(r => {});
	}, []);

	// Функція обробки кліку для переходу на іншу сторінку
	const handleNextClick = () => {
		if (R.not(isNextButtonDisabled)) {
			router.push({
				pathname: '/result',
				query: {make: selectedMake, year: selectedYear}
			});
		}
	};

	return (
		<Box width='100%'>
			<h2Title>Select Vehicle</h2Title>
			<FlexBox width='100%' flexDirection='column'>
				<FlexBox width='100%'>
					<select
						id='make'
						value={selectedMake}
						onChange={(e) => setSelectedMake(e.target.value)}
					>
						<option value=''>--Select Make--</option>
						{makes.map(({ MakeId, MakeName}) => (
							<option key={MakeId} value={MakeName}>
								{`${MakeId} ${MakeName}`}
							</option>
						))}
					</select>
				</FlexBox>
				<FlexBox width='100%'>
					<label htmlFor="make">Make:</label>
					<label htmlFor="year">Model Year:</label>
					<select
						id="year"
						value={selectedYear}
						onChange={(e) => setSelectedYear(e.target.value)}
					>
						<option value="">--Select Year--</option>
						{years.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</FlexBox>
			</FlexBox>
			<FlexBox width='100%' justifyContent='center' alignItems='center'>
					<Button
						mt={3}
						height={50}
						borderRadius={28}
						disabled={isNextButtonDisabled}
						minWidth={{ xs: 250, sm: 500 }}
						onClick={handleNextClick}
						fontSize={{ xs: '14px', lg: '16px' }}
					>
							Next
					</Button>
			</FlexBox>
		</Box>
	);
}

const FilterPage = () => {

	return (
		<Box>
			<PageTitle
				color='red'
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
	)
}

export default FilterPage
