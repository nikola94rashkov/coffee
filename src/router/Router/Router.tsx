import { PrivateRoutes } from '../PrivateRoutes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Cart = lazy(() =>
	import('@src/pages/Cart').then((module) => ({ default: module.Cart })),
)
const Dashboard = lazy(() =>
	import('@src/pages/Dashboard').then((module) => ({
		default: module.Dashboard,
	})),
)
const Home = lazy(() =>
	import('@src/pages/Home').then((module) => ({
		default: module.Home,
	})),
)
const Login = lazy(() =>
	import('@src/pages/Login').then((module) => ({
		default: module.Login,
	})),
)
const NotFound = lazy(() =>
	import('@src/pages/NotFound').then((module) => ({
		default: module.NotFound,
	})),
)
const Product = lazy(() =>
	import('@src/pages/Product').then((module) => ({
		default: module.Product,
	})),
)
const Register = lazy(() =>
	import('@src/pages/Register').then((module) => ({
		default: module.Register,
	})),
)

export const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			element: <PrivateRoutes condition={true} />,
			children: [
				{
					path: '/login',
					element: <Login />,
				},
				{
					path: '/register',
					element: <Register />,
				},
			],
		},
		{
			path: '/cart',
			element: <Cart />,
		},
		{
			path: '/product/:productId',
			element: <Product />,
		},
		{
			element: <PrivateRoutes condition={true} />,
			children: [
				{
					path: '/dashboard',
					element: <Dashboard />,
				},
			],
		},
		{
			path: '*',
			element: <NotFound />,
		},
	])

	return (
		<Suspense fallback={<h2>loading</h2>}>
			<RouterProvider router={router} />
		</Suspense>
	)
}
