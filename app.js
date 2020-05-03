const { ApolloServer, gql } = require("apollo-server");
const _ = require("lodash");
const rootData = require("./data");

const typeDefs = gql`
  type Skywalker {
    id: ID
    name: String
    title: String
    son: Skywalker
    daughter: Skywalker
    wife: Skywalker
    husband: Skywalker
    gaurdians: [Skywalker]
    mentors: [Skywalker]
    sister: Skywalker
    brother: Skywalker
    parents: [Skywalker]
  }

  type Query {
    skywalker(name: String): Skywalker
  }
`;

const resolvers = {
  Query: {
    skywalker: (parent, data) => _.find(rootData, { name: data.name }),
  },
  Skywalker: {
    son: (parent) => _.find(rootData, { id: parent.son }),
    daughter: (parent) => _.find(rootData, { id: parent.daughter }),
    wife: (parent) => _.find(rootData, { id: parent.wife }),
    husband: (parent) => _.find(rootData, { id: parent.husband }),
    gaurdians: (parent) => {
      try {
        parent.gaurdian.map((gaurdian) => _.find(rootData, { id: gaurdian }));
      } catch {
        return null;
      }
    },
    mentors: (parent) => {
      try {
        return parent.mentors.map((mentor) => _.find(rootData, { id: mentor }));
      } catch {
        return null;
      }
    },

    sister: (parent) => _.find(rootData, { id: parent.sister }),
    brother: (parent) => _.find(rootData, { sister: parent.id }),
    parents: (parent) => {
      let obj1 = _.filter(rootData, { son: parent.id });
      let obj2 = _.filter(rootData, { daughter: parent.id });
      return [...obj1, ...obj2];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
