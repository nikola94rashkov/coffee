import { PrivateRoutes } from '../PrivateRoutes'
import { Route, Routes } from 'react-router-dom'
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
	return (
		<Suspense fallback={<h2>loading</h2>}>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/cart'
					element={<Cart />}
				/>
				<Route
					path='/product/:productId'
					element={<Product />}
				/>
				<Route
					element={
						<PrivateRoutes
							condition={true}
							navigate='/'
						/>
					}>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
				</Route>
				<Route element={<PrivateRoutes condition={true} />}>
					<Route
						path='/dashboard'
						element={<Dashboard />}
					/>
				</Route>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</Suspense>
	)
}
