import jwt from 'jsonwebtoken';

const create = async (username, expiresIn) => {
  const token = await jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn,
  });
  console.log(token);
  return token;
};

export default { create };
