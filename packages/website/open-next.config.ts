import type { OpenNextConfig } from '@opennextjs/aws/types/open-next.js'

const config = {
  default: {
    override: {
      wrapper: 'aws-lambda-streaming', // This is necessary to enable lambda streaming
    },
    install: {
      packages: ['sharp'],
    },
  },
  imageOptimization: {
    loader: 's3',
    // install: {
    //   packages: [],
    // },
  },
} satisfies OpenNextConfig

export default config
