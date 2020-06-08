import express from "express"
import graphqlHTTP from "express-graphql"
import { schema } from "./data/schema"

const app = express()

app.get('/', (req, res) => {
    res.send("GraphQL learning in progress")
})



app.use('/graphql', graphqlHTTP({
    schema: schema,

    graphiql: true
}))

app.listen(8080, () => console.log("GraphQL running on 8080"))