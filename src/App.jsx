import React from "react";

export const App = () => {
	const currentDate = new Date().getFullYear();
	//императивный стиль

	return React.createElement(
		"div",
		null,
		React.createElement(
			"a",
			{
				href: "https://ru.react.dev/learn",
			},
			"Learn react",
		),
		React.createElement("h1", null, currentDate),
	);
};
