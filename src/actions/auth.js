export const login = name => ({
  type: 'LOGIN',
  name: name,
});

export const logout = () => ({
  type: 'LOGOUT',
});
