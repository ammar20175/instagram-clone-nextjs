import Post from "./Post";

const img1 =
	"https://images.pexels.com/photos/18254694/pexels-photo-18254694/free-photo-of-man-with-suitcase-in-front-of-modern-building-in-baku-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const img2 =
	"https://images.pexels.com/photos/18622543/pexels-photo-18622543/free-photo-of-go-home.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const posts = [
	{
		id: "123",
		username: "ammar",
		userImg: img1,
		img: img1,
		caption: "Hey you know great things are comming",
	},
	{
		id: "432",
		username: "ahmad",
		userImg: img2,
		img: img2,
		caption: "Hey you know great things are comming very soon",
	},
];

function Posts() {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
