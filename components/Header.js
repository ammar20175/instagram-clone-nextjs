import Image from "next/image";
import {
	MagnifyingGlassIcon,
	PlayCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	Bars3Icon,
	PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

function Header() {
	return (
		<header className="shadow-sm border-b bg-white sticky top-0 z-50">
			<div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
				{/* left */}
				<div className="relative cursor-pointer hidden lg:inline-grid  w-24">
					<Image
						src="https://links.papareact.com/ocw"
						fill
						className="object-contain"
					/>
				</div>

				<div className="relative cursor-pointer lg:hidden  w-10 flex-shrink-0">
					<Image
						src="https://links.papareact.com/jjm"
						fill
						className="object-contain"
					/>
				</div>

				{/* middle */}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
						</div>
						<input
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				{/* right */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBtn" />
					<Bars3Icon className="h-6 md:hidden cursor-pointer" />

					<div className="relative navBtn">
						<PaperAirplaneIcon className="navBtn -rotate-45" />
						<div
							className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center
						 justify-center animate-pulse text-white"
						>
							3
						</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />

					<img
						className="h-10 rounded-full cursor-pointer"
						src="https://links.papareact.com/3k4"
						alt="profile pic"
					/>
				</div>
			</div>
		</header>
	);
}

export default Header;
