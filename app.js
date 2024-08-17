import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema.js"
import { resolvers } from "./resorver.js"

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers
})




startStandaloneServer(server,{
    listen:{port:3000}
}).then(()=>{
    console.log(" 🎃 server is running on port 3000 🎃");
    
}).catch(()=>{
    console.log(err);
    
})