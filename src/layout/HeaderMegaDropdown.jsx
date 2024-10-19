import React, { useState } from "react";

const getColumnCount = (columnCount) => {
	switch (columnCount) {
		case 1:
			return "grid-cols-1";
		case 2:
			return "grid-cols-2";
		case 3:
			return "grid-cols-3";
		case 4:
			return "grid-cols-4";
		default:
			return "grid-cols-2";
	}
};

export default function HeaderMegaDropdown({
	sections,
	columnCount = 2,
	left,
}) {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<>
			<div
				id="mega-menu-full"
				className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
			>
				<ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<button
							id="mega-menu-full-dropdown-button"
							data-collapse-toggle="mega-menu-full-dropdown"
							className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
							onClick={() => setShowDropdown(!showDropdown)}
						>
							Company
						</button>
					</li>
				</ul>
			</div>
			<div
				id="mega-menu-full-dropdown"
				className={`overflow-hidden transition-all duration-500 ease-in-out ${
					showDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				} mt-[1.25rem] absolute min-w-max z-10 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 ${left}`}
			>
				<div
					className={`grid max-w-screen-xl w-full p-4 mx-auto text-gray-900 dark:text-white gap-4 ${getColumnCount(
						columnCount
					)}`}
				>
					{Array.from({ length: columnCount }).map((_, index) => (
						<ul className="space-y-2" key={index}>
							{sections
								.slice(
									(index * sections.length) / columnCount,
									((index + 1) * sections.length) / columnCount
								)
								.map((section) => (
									<li key={section.name}>
										<a
											href="#"
											className="block w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
										>
											<div className="font-semibold">{section.name}</div>
											<span className="text-sm text-gray-500 dark:text-gray-400">
												{section.description}
											</span>
										</a>
									</li>
								))}
						</ul>
					))}
				</div>
			</div>
		</>
	);
}
