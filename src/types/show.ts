import { type Boolean, type Child, type Null } from './'

export type ShowProps = {
	children: Child
}

export type ShowWhenProps = {
	isTrue: Boolean
	children: Child
}

export type ShowElseProps = {
	render?: Child
	children?: Child
}

export type TShow = Child | Null
