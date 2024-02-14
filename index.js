const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/schema/userSchema');
const resolvers = require('./src/resolvers/userResolvers');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
