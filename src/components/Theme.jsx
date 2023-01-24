import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Theme = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	if (localStorage.getItem("darkMode") === "dark") {
		document.documentElement.classList.add(localStorage.getItem("darkMode"));
	} else {
		localStorage.setItem("darkMode", "light");
	}

	const turnOnDarkMode = () => {
		setIsDarkMode(!isDarkMode);

		if (localStorage.getItem("darkMode") === "light" && isDarkMode === false) {
			localStorage.setItem("darkMode", "dark");
			document.documentElement.classList.add("dark");
		} else {
			localStorage.setItem("darkMode", "light");
			document.documentElement.classList.remove("dark");
		}
	};

	const ActiveIcon = () => {
		const activeTheme = localStorage.getItem("darkMode");

		const moon = <BsMoonFill className="text-slate-300" />;
		const sun = <BsSunFill className="text-orange-600" />;

		if (activeTheme === "dark" && isDarkMode === true) {
			return moon;
		} else if (activeTheme === "light" && isDarkMode === false) {
			return sun;
		} else if (activeTheme === "dark" && isDarkMode === false) {
			return moon;
		} else if (activeTheme === "light" && isDarkMode === true) {
			return sun;
		}
	};

	return (
		<button
			className="absolute right-8 top-8 md:right-16 md:top-8  text-2xl bg-[#efefeffb] dark:bg-slate-900 p-2 rounded-full duration-200"
			onClick={turnOnDarkMode}>
			{<ActiveIcon />}
		</button>
	);
};

export default Theme;
