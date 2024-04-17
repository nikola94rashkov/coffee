import { Router } from './router'
import { Header, Footer } from './components'

export const App = () => {
	return (
		<>
			<Header />

			<main>
				<Router />
			</main>

			<Footer />
		</>
	)
}
