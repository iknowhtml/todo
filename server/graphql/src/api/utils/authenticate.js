import { AuthenticationError } from 'apollo-server-express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

const authenticateResolverFunction = resolver => (
  parent,
  args,
  context,
  info
) => {
  if (context.token === null) {
    throw new AuthenticationError('No authorization token found.');
  }

  try {
    const token = context.token.replace('Bearer', '');
    const { username } = jwt.verify(token, process.env.TOKEN_SECRET);
    context = { ...context, username };
  } catch (error) {
    throw new JsonWebTokenError(error);
  }

  return resolver(parent, args, context, info);
};

const authenticateResolver = (authenticatedResolver, [key, resolver]) => {
  authenticatedResolver[key] = authenticateResolverFunction(resolver);

  return authenticatedResolver;
};

const authenticateResolvers = (authenticatedResolvers, [key, field]) => {
  const resolvers = Object.entries(field);
  authenticatedResolvers[key] = resolvers.reduce(authenticateResolver, {});

  return authenticatedResolvers;
};

const authenticate = resolvers => {
  const fields = Object.entries(resolvers);
  const authenticated = fields.reduce(authenticateResolvers, {});

  return authenticated;
};

export default authenticate;
