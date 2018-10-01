// higher order component (HOC:) - A component that renders another component
// HOC shall reuse code
//render hijacking
// prop manipulationm
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>
      The info is: <br />- {props.info}{' '}
    </p>
  </div>
);

const widthAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {/* {props.isAdmin == true ? (
        <p>This is private info please dont share</p>
      ) : (
        <p>NO ACCESS FOR YOU!</p>
      )} */}
      {props.isAdmin && <p>This is private please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Login to show the info</p>
      )}
    </div>
  );
};

const AdminInfo = widthAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the details" />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="These are the details" />,
  document.getElementById('app')
);
