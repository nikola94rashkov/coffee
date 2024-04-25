import { styled } from '@mui/material/styles'

export const SHeader = styled('header')(({ theme }) => {
	const {
		palette: {
			primary: { light },
			common: { white },
		},
		typography: { body1 },
	} = theme

	console.log(theme)

	return {
		...body1,
		backgroundColor: light,
		color: white,
		padding: '20px 0',
	}
})

export const SHeaderFlex = styled('div')(({ theme }) => {
	const {} = theme

	return {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
})
