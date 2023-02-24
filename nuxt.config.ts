import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	pages: true,
	srcDir: "src",
	ssr: true,
	modules: ["@nuxtjs/apollo"],
	path: "~/components",
	pathPrefix: false,
	apollo: {
		autoImports: true,
		clients: {
			default: {
				httpEndpoint: process.env.GRAPHQL_ENDPOINT,
			},
		},
	},
});
