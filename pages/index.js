import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Head from "next/head";

export default function Home() {
	return (
		<main className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
			<Head>
				<title>Instagram</title>
			</Head>

			<Header />

			<Feed />

			<Modal />
		</main>
	);
}
