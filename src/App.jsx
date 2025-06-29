export const App = () => {
	const currentDate = new Date().getFullYear();
	//декларативный стиль

	return (
		<div>
			<a href="https://ru.react.dev/learn">Learn react</a>
			<h1>{currentDate}</h1>
		</div>
	);
};
