const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getIsRefreshingUser = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  getIsRefreshingUser,
};

export default authSelectors;