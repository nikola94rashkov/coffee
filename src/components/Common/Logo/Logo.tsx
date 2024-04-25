import { Link } from 'react-router-dom'
import { SLogo } from './Logo.styled'
import LogoIcon from '@src/assets/coffee-bean-svgrepo-com-logo.svg'

export const Logo = () => (
	<SLogo>
		<Link
			to='/'
			className='logo'>
			<img
				src={LogoIcon}
				alt='logo'
			/>
		</Link>
	</SLogo>
)
