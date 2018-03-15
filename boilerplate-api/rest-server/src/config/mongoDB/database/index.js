import mongoose from 'mongoose';
import {
  success,
  error
} from '../../../lib/log';

mongoose.connect('mongodb://localhost/mass');

const TestModel = mongoose.model('TestModel', { name: String });

const test = new TestModel({ name: 'Mongo' });
test.save().then( () => success('Successfully connected to mongoDB'));

export default mongoose;