import Header from "@/components/Header";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signIn({ providers }) {
	return (
		<>
			<Header />

			<div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
				<img className="w-80" src="https://links.papareact.com/ocw" alt="img" />

				<p className="font-xs italic mt-10">
					This is not a real instagram app.It is built for educational purposes
					only
				</p>

				<div className="mt-40">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className="p-3 px-12 bg-blue-500 rounded-lg text-white font-semibold"
								onClick={() =>
									SignIntoProvider(provider.id, { callbackUrl: "/" })
								}
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default signIn;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
