const validate = (username, password) => {
  if (username === 'user' && password === 'password') {
    return true;
  }
  return false;
};

export default { validate };
