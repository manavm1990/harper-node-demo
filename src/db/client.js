import harperive from "harperive";

import { config } from "dotenv";

config();

export default new harperive.Client({
  harperHost: process.env.INSTANCE_URL,
  username: process.env.INSTANCE_USERNAME,
  password: process.env.INSTANCE_PASSWORD,

  // Only 1 schema
  schema: process.env.INSTANCE_SCHEMA,
});
