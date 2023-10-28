function Story({ img, username }) {
	return (
		<div>
			<img
				className="h-14 w-14 rounded-full border-2 border-red-500 p-[1.5px]
                 cursor-pointer object-contain hover:scale-110 transition transform duration-200 ease-out"
				src={img}
				alt="img"
			/>
			<p className="text-xs w-14 truncate text-center">{username}</p>
		</div>
	);
}

export default Story;
