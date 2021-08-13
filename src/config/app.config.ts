const { NODE_ENV = "development", PORT = 5000 } = process.env;
const IN_PROD = NODE_ENV === "production";

export { IN_PROD, PORT };
