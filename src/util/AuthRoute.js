// import React from 'react';
// import { Route, Redirect} from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';


// const AuthRoute = ({ component: Component, user, ...rest }) => (
//         <Route
//         {...rest}
//         render={(props) => user.isAuthenticated === true ? <Component { ...props} /> :<Redirect to='/login' /> }
//         />
// );

// const mapStateToProps = (state) => ({
//        user: state.user
//       });


// AuthRoute.prototype = {
//         user: PropTypes.object.isRequired
// }
// export default connect(mapStateToProps)(AuthRoute);



// {loading && <CircularProgress size={30}  style={{position:'absolute'}}/> }
