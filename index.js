import express from "express"
import graphqlHTTP from "express-graphql"
import schema from "./schema"
import resolver from "./resolvers"

const app = express()

app.get('/', (req, res) => {
    res.send("GraphQL learning in progress")
})

const root = resolver;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log("GraphQL running on 8080"))