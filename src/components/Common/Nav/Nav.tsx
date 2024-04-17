import { Link } from 'react-router-dom'
import { TNav } from '@src/types'

export const Nav = (nav: TNav[]) => {
	return (
		<ul>
			{nav.map(({ text, link }) => (
				<li>
					<Link to={link}>{text}</Link>
				</li>
			))}
		</ul>
	)
}
