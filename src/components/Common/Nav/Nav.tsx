import { NavLink } from 'react-router-dom'
import { TNav } from '@src/types'
import { FC } from 'react'
import { SNav } from './Nav.styled'

export const Nav: FC<TNav> = ({ nav }) => {
	return (
		<SNav>
			<ul>
				{nav.map(({ id, text, link, title }) => (
					<li key={id}>
						<NavLink
							className={({ isActive, isPending }) =>
								isPending ? 'pending' : isActive ? 'active' : ''
							}
							to={link}
							title={title}>
							{text}
						</NavLink>
					</li>
				))}
			</ul>
		</SNav>
	)
}
