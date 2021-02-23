const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')
const faker = require('faker')
const {
  GraphQLList
} = require('graphql/type')

console.log('M-am incarcat')
const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: {
    street: {
      type: GraphQLString,
      resolve() {
        return faker.address.streetName()
      }
    },
    number: {
      type: GraphQLString,
      resolve() {
        return faker.random.number(2000)
      }
    },
    postCode: {
      type: GraphQLString,
      resolve() {
        return faker.address.zipCode()
      }
    }
  }
})

const Person = new GraphQLObjectType({
  name: 'Person',
  fields: {
    firstName: {
      type: GraphQLString,
      resolve() {
        return faker.name.firstName()
      }
    },
    secondName: {
      type: GraphQLString,
      resolve() {
        return faker.name.lastName()
      }
    },
    address: {
      type: AddressType,
      resolve() {
        return 'add'
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      name: {
        type: GraphQLString,
        resolve() {
          return faker.name.findName()
        }
      },
      people: {
        type: new GraphQLList(Person),
        resolve() {
          return Array.from({
            length: 2000
          }, (_, k) => k)
        }
      }
    }
  })
})

// let testy = [...Array(10)].map((el,i) => ({id: i, name: faker.name.findName()}))
