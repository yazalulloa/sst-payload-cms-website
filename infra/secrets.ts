export const secret = {
  betterAuthSecret: new sst.Secret("BETTER_AUTH_SECRET"),
  payloadSecret: new sst.Secret("PAYLOAD_SECRET"),

  githubClientId: new sst.Secret("GITHUB_CLIENT_ID"),
  githubClientSecret: new sst.Secret("GITHUB_CLIENT_SECRET"),
  googleClientId: new sst.Secret("GOOGLE_CLIENT_ID"),
  googleClientSecret: new sst.Secret("GOOGLE_CLIENT_SECRET"),

  tursoUrl: new sst.Secret("TURSO_URL"),
  tursoToken: new sst.Secret("TURSO_TOKEN"),
}


export const allSecrets = [...Object.values(secret)];