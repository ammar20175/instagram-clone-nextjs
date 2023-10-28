import {
	BookmarkIcon,
	ChatBubbleBottomCenterIcon,
	FaceSmileIcon,
	HeartIcon,
	EllipsisHorizontalIcon,
	PaperAirplaneIcon,
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

			{/* Buttons */}

			{/* comments */}

			{/* input box */}
		</div>
	);
}

export default Post;
