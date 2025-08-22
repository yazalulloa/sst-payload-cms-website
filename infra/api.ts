import { isLocal } from "./util";
import { myRouter } from "./domain";
import { secret } from "./secrets";

const appUrl = isLocal ? "http://localhost:3000" : myRouter.url;

new sst.aws.Nextjs("PayloadCmsWebsite", {
  path: "packages/website",
  router: {
    instance: myRouter,
  },
  environment: {
    APP_IS_DEV: isLocal.toString(),
    BETTER_AUTH_URL: appUrl,
    NEXT_PUBLIC_SERVER_URL: appUrl,
    PAYLOAD_SECRET: "feb75bcca90fedd575032865",
    PREVIEW_SECRET: "feb75bcca90fedd575032865",
  },
  imageOptimization: {
    staticEtag: true,
  },
  link: [
    secret.betterAuthSecret,
    secret.payloadSecret,
    secret.githubClientId,
    secret.githubClientSecret,
    secret.googleClientId,
    secret.googleClientSecret,
    secret.tursoUrl,
    secret.tursoToken,
  ],
  server: {
    // install: ["sharp"], // DOES NOT WORK
    // layers: ["arn:aws:lambda:us-east-1:905418377819:layer:sharp-lambda-x64:1"],
  },
  transform: {
    server: {
      timeout: "60 seconds",
      memory: "3008 MB",
    },
    assets: (args) => {
      args.transform = {};
    },
    cdn: (args) => {
      args.transform = {
        distribution: (disArgs) => {
          disArgs.httpVersion = "http2and3";
        },
      };
    },
  },
});
