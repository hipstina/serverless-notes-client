const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-api-file-uploads",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://gei3iduw23.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_1GP6gQixP",
    APP_CLIENT_ID: "47k77nqvgth2guu6up09im6568",
    IDENTITY_POOL_ID: "us-east-2:aa2a89bc-16a0-49b0-bb9b-01786b2dd4f0",
  },
};

export default config;
