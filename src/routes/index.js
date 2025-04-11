import { lazy } from "react";

const LandingPage = lazy(() => import("../views/landing_page/index"));
const Page404 = lazy(() => import("../views/404/index"));

function routes() {
	return [
		{
			path: "/",
			element: <LandingPage />,
		},
		{
			path: "/*",
			element: <Page404 />
		},
	];;
}

const appRoutes = { routes };

export default appRoutes;