import React from 'react';
import { connect } from 'react-redux';

import { startLogin, startLoginGit } from '../actions/auth';

// stateless funtional component
export const LoginPage = ({ startLogin, startLoginGit }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">The Budget App</h1>
            <p>
                Fixed income, large expenses ? <br />
                No probelemo !
            </p>

            <button className="button" onClick={startLogin}>
                Sign in with
            </button>
            <button className="button__github" onClick={startLoginGit}>
                Sign in with Github
            </button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin()),
    startLoginGit: () => dispatch(startLoginGit()),
});

export default connect(
    undefined,
    mapDispatchToProps
)(LoginPage);
