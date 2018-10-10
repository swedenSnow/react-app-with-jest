import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

//stateless funtional component
export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Keep track of your Budget</h1>
      <p>It's time to get your expenses under control</p>

      <button className="button" onClick={startLogin}>
        Sign in with
        <span className="btn__icon" />
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
