require('dotenv').config();

import db from '../../config/database';
import { success, error } from '../log';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    success(`successfully created database ${database}`);
  } catch (err) {
    error(`error creating database ${err}`);
  }
};

export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    );
    success(`successfully dropped database ${database}`);
  } catch (err) {
    error(`error dropping database ${err}`);
  }
};