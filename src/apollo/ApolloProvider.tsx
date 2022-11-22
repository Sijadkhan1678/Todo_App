import React from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "./Client"

export const Provider = ({ element }:any) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)