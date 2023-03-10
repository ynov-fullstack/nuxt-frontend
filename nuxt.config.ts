import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	pages: true,
	srcDir: "src",
	modules: ["@nuxtjs/apollo"],
	path: "~/components",
	pathPrefix: false,
	app: {
		head: {
			link: [
				{rel:"stylesheet", href:"https://ynov-globalressources.s3.eu-west-3.amazonaws.com/css/global.css"}
			],
		}
	},
	apollo: {
		autoImports: true,
		clients: {
			default: {
				httpEndpoint: process.env.GRAPHQL_ENDPOINT,
			},
		},
	},
});