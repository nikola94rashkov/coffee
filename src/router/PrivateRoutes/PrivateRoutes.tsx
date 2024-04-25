import { Navigate, Outlet } from 'react-router-dom'
import { Boolean, String } from '@src/types'

export const PrivateRoutes = ({
	condition,
	navigate = '/login',
}: {
	condition: Boolean
	navigate?: String
}) => {
	return condition ? <Outlet /> : <Navigate to={navigate} />
}
