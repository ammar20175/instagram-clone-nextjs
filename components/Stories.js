// import { Faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { createRandomUser } from "@/utils/fakeData";

function Stories() {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = faker.helpers.multiple(createRandomUser, {
			count: 20,
		});
		setSuggestions(suggestions);
	}, []);

	return (
		<div
			className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll 
        scrollbar-thin scrollbar-thumb-black"
		>
			{suggestions.map((profile) => (
				<Story key={profile.id} img={profile.img} username={profile.username} />
			))}
		</div>
	);
}

export default Stories;
