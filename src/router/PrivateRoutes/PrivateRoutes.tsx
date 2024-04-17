import { Navigate, Outlet } from 'react-router-dom'
import { Boolean } from '@src/types'

export const PrivateRoutes = ({ condition }: { condition: Boolean }) => {
	return condition ? <Outlet /> : <Navigate to='/login' />
}
