import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
	return (
		<div className="min-h-screen flex flex-col w-full">
			<Header />
			<main className="flex-grow container mx-auto p-4">
				<h2 className="text-2xl font-semibold mb-4">Welcome to LMS</h2>
				<p>This is where your content will go.</p>
			</main>
			<Footer />
		</div>
	);
}

export default App;
