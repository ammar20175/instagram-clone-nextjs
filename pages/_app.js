import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<RecoilRoot>
				<main className={inter.className}>
					<Component {...pageProps} />
				</main>
			</RecoilRoot>
		</SessionProvider>
	);
}
