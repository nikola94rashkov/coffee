import { Container } from '@mui/material'
import { SHeader, SHeaderFlex } from './Header.styled'
import { Logo, Nav } from '@src/components/Common'

import { navData } from './data/navData'

export const Header = () => {
	return (
		<SHeader>
			<Container maxWidth='lg'>
				<SHeaderFlex>
					<Logo />
					<Nav nav={navData} />
				</SHeaderFlex>
			</Container>
		</SHeader>
	)
}
