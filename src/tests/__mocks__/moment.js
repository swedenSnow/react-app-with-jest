// mocked moment// Manuall mock
const moment = require.requireActual('moment');
// make moment's default value if not provided === 0, a fixed point in time
export default (timestamp = 0) => moment(timestamp);
