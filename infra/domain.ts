
export const myRouter = new sst.aws.Router("MyRouter", {
  // domain: {
  //   name: domain,
  //   aliases: [`*.${domain}`],
  //   // dns: sst.aws.dns({override: true}),
  // },
  transform: {
    cdn: (args) => {
      args.transform = {
        distribution: (disArgs) => {
          disArgs.httpVersion = "http2and3";
        }
      }
    }
  }
});