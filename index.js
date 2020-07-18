import { GraphQLServer } from "graphql-yoga"
import resolver from "./graphql/resolver"

const typeDefs = "./graphql/schema.graphql"

const resolvers = resolver
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log("Server is running on localhost:4000"))
