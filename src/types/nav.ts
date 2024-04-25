import { Child, String } from './common'

export type NavItem = {
	id: number
	text: Child
	link: String
	title: String
}

export type TNav = {
	nav: NavItem[]
}
