import { styled } from '@mui/material/styles'

export const SNav = styled('nav')(({ theme }) => {
	const {
		palette: {
			primary: { dark },
		},
	} = theme
	return {
		ul: {
			display: 'flex',
			margin: '-5px',
		},
		li: {
			padding: '5px',
			minWidth: '40px',
			flexGrow: '1',
		},
		a: {
			color: 'inherit',
			textDecoration: 'none',
			padding: '5px 10px',
			display: 'flex',
			transition: 'all .3s',

			'&.active, :hover': {
				backgroundColor: dark,
			},
		},
	}
})
