import { gql } from "@apollo/client"

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      status
      description
      client {
        name
        id
        email
        phone
      }
    }
  }
`

export { GET_PROJECT, GET_PROJECTS }
