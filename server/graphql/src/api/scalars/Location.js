import { GraphQLScalarType } from 'graphql';

const LocationResolver = new GraphQLScalarType({
  name: 'Location',
  description:
    'Custom location scalar type that represents latitude and longitude as a tuple',
  serialize: value => {
    const { x: latitude, y: longitude } = value;
    return [latitude, longitude];
  },
  parseValue: value => null,
  parseLiteral: ast => {
    const {
      kind,
      values: [{ value: latitude }, { value: longitude }],
    } = ast;
    switch (kind) {
      case 'ListValue':
        return `(${latitude}, ${longitude})`;
      default:
        return null;
    }
  },
});

export default LocationResolver;
