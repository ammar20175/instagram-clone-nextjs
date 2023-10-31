import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { createRandomUser } from "@/utils/fakeData";
import { useSession } from "next-auth/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

function Stories() {
	const [suggestions, setSuggestions] = useState([]);
	const { data: session } = useSession();

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
			{session && (
				<div className="relative">
					<Story img={session.user.image} username="you" />
					<div className="bg-white rounded-full absolute top-9 right-0">
						<PlusCircleIcon className=" h-6 w-6 font-bold text-blue-500" />
					</div>
				</div>
			)}
			{suggestions.map((profile) => (
				<Story key={profile.id} img={profile.img} username={profile.username} />
			))}
		</div>
	);
}

export default Stories;
