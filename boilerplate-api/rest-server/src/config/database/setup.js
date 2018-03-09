import {
  createDatabase,
  dropDatabase
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await createDatabase();
  process.exit();
};
setup();