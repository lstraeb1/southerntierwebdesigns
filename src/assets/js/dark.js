// //
// //    The Dark Mode System
// //

// // Helper functions to toggle dark mode
// function enableDarkMode() {
// 	document.body.classList.add('dark-mode');
// 	localStorage.setItem('theme', 'dark');
// 	document.getElementById('dark-mode-toggle').checked = true;
// }

// function disableDarkMode() {
// 	document.body.classList.remove('dark-mode');
// 	localStorage.setItem('theme', 'light');
// 	document.getElementById('dark-mode-toggle').checked = false;
// }

// // Determines a new user's dark mode preferences
// function detectColorScheme() {
// 	// Default to the light theme
// 	let theme = 'light';

// 	// Check localStorage for a saved 'theme' variable. If it's there, the user has visited before, so apply the necessary theme choices
// 	if (localStorage.getItem('theme')) {
// 		theme = localStorage.getItem('theme');
// 	}
// 	// If it's not there, check to see if the user has applied dark mode preferences themselves in the browser
// 	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 		theme = 'dark';
// 	}

// 	// Apply the theme accordingly
// 	theme === 'dark' ? enableDarkMode() : disableDarkMode();
// }

// // Run on page load
// detectColorScheme();

// // Add event listener to the dark mode button toggle
// document.getElementById('dark-mode-toggle').addEventListener('change', () => {
// 	// On click, check localStorage for the dark mode value, use to apply the opposite of what's saved
// 	localStorage.getItem('theme') === 'light' ? enableDarkMode() : disableDarkMode();
// });