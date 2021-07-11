import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};

export default MyApp;