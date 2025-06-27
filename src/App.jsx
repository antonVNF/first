export const App = () => {
	const currentDate = new Date().getFullYear();
	//декларативный стиль

	return (
		<div>
			<h1>{currentDate}</h1>
		</div>
	);
};
