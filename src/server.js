import express from 'express';
import bodyParser from 'body-parser';
import { buildSchema } from 'graphql';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import schema from './schema';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

app.get('/', (req, res) => {
  res.status(200).send('Graph QL api ok');
});

export default app;