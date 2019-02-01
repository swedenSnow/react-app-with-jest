import DotEnv from 'dotenv';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; //! Specified regarding which version of react iam using

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter(),
});
