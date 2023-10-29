import {
	BookmarkIcon,
	FaceSmileIcon,
	HeartIcon,
	EllipsisHorizontalIcon,
	PaperAirplaneIcon,
	ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";

function Post({ id, username, userImg, img, caption }) {
	return (
		<div className="bg-white my-7 border rounded-sm">
			{/* header */}
			<div className="flex items-center p-5">
				<img
					className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
					src={userImg}
					alt="img"
				/>
				<p className="flex-1 font-bold">{username}</p>
				<EllipsisHorizontalIcon className="h-5" />
			</div>

			{/* img */}
			<img
				loading="lazy"
				className="object-cover w-full"
				src={img}
				alt="main-img"
			/>

			{/* Buttons */}
			<div className="flex justify-between px-4 pt-4">
				<div className="flex space-x-4">
					<HeartIcon className="btn" />
					<ChatBubbleLeftEllipsisIcon className="btn" />
					<PaperAirplaneIcon className="btn h-6 -rotate-45" />
				</div>

				<BookmarkIcon className="btn" />
			</div>

			{/* caption */}
			<p className="truncate p-5">
				<span className="font-bold mr-1">{username} </span>
				{caption}
			</p>

			{/* comments */}

			{/* input box */}
			<form className="flex items-center p-4">
				<FaceSmileIcon className="h-7" />

				<input
					className="border-none flex-1 focus:ring-0 outline-none"
					type="text"
					placeholder="Add a comment..."
				/>
				<button className="font-semibold text-blue-400">Post</button>
			</form>
		</div>
	);
}

export default Post;
