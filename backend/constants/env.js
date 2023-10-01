import dotenv from 'dotenv';
import * as process from 'process';

dotenv.config({
  path: '.env.local',
});


export const {
  MONGODB_PORT,
  BACKEND_PORT
} = process.env;
