import { styled } from '@mui/material/styles'

export const SLogo = styled('div')(({ theme }) => {
	const {
		palette: {
			common: { white },
		},
	} = theme

	console.log(theme)

	return {
		'&': {
			marginRight: '20px',
		},
		img: {
			maxWidth: '60px',
		},
		a: {
			display: 'inline-block',
			color: white,
			fontSize: '30px',
		},
	}
})
