export const typeDefs = /* GraphQL */ `type Address {
  id: ID!
  name: String!
  line1: String!
  line2: String
  city: String!
  state: String!
  zip: String!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  name: String!
  line1: String!
  line2: String
  city: String!
  state: String!
  zip: String!
}

input AddressCreateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  line1_ASC
  line1_DESC
  line2_ASC
  line2_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  zip_ASC
  zip_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AddressPreviousValues {
  id: ID!
  name: String!
  line1: String!
  line2: String
  city: String!
  state: String!
  zip: String!
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

input AddressUpdateDataInput {
  name: String
  line1: String
  line2: String
  city: String
  state: String
  zip: String
}

input AddressUpdateInput {
  name: String
  line1: String
  line2: String
  city: String
  state: String
  zip: String
}

input AddressUpdateOneInput {
  create: AddressCreateInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AddressWhereUniqueInput
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  line1: String
  line1_not: String
  line1_in: [String!]
  line1_not_in: [String!]
  line1_lt: String
  line1_lte: String
  line1_gt: String
  line1_gte: String
  line1_contains: String
  line1_not_contains: String
  line1_starts_with: String
  line1_not_starts_with: String
  line1_ends_with: String
  line1_not_ends_with: String
  line2: String
  line2_not: String
  line2_in: [String!]
  line2_not_in: [String!]
  line2_lt: String
  line2_lte: String
  line2_gt: String
  line2_gte: String
  line2_contains: String
  line2_not_contains: String
  line2_starts_with: String
  line2_not_starts_with: String
  line2_ends_with: String
  line2_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregateCreditCard {
  count: Int!
}

type AggregateCustomer {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderProduct {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Category {
  id: ID!
  name: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String!
  products: ProductCreateManyWithoutCategoriesInput
}

input CategoryCreateManyWithoutProductsInput {
  create: [CategoryCreateWithoutProductsInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateWithoutProductsInput {
  name: String!
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateInput {
  name: String
  products: ProductUpdateManyWithoutCategoriesInput
}

input CategoryUpdateManyWithoutProductsInput {
  create: [CategoryCreateWithoutProductsInput!]
  delete: [CategoryWhereUniqueInput!]
  connect: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutProductsInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutProductsInput!]
}

input CategoryUpdateWithoutProductsDataInput {
  name: String
}

input CategoryUpdateWithWhereUniqueWithoutProductsInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutProductsDataInput!
}

input CategoryUpsertWithWhereUniqueWithoutProductsInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutProductsDataInput!
  create: CategoryCreateWithoutProductsInput!
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
}

type CreditCard {
  id: ID!
  name: String!
  number: String!
  expDate: DateTime!
  cvv: String!
}

type CreditCardConnection {
  pageInfo: PageInfo!
  edges: [CreditCardEdge]!
  aggregate: AggregateCreditCard!
}

input CreditCardCreateInput {
  name: String!
  number: String!
  expDate: DateTime!
  cvv: String!
}

input CreditCardCreateOneInput {
  create: CreditCardCreateInput
  connect: CreditCardWhereUniqueInput
}

type CreditCardEdge {
  node: CreditCard!
  cursor: String!
}

enum CreditCardOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  number_ASC
  number_DESC
  expDate_ASC
  expDate_DESC
  cvv_ASC
  cvv_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CreditCardPreviousValues {
  id: ID!
  name: String!
  number: String!
  expDate: DateTime!
  cvv: String!
}

type CreditCardSubscriptionPayload {
  mutation: MutationType!
  node: CreditCard
  updatedFields: [String!]
  previousValues: CreditCardPreviousValues
}

input CreditCardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CreditCardWhereInput
  AND: [CreditCardSubscriptionWhereInput!]
  OR: [CreditCardSubscriptionWhereInput!]
  NOT: [CreditCardSubscriptionWhereInput!]
}

input CreditCardUpdateDataInput {
  name: String
  number: String
  expDate: DateTime
  cvv: String
}

input CreditCardUpdateInput {
  name: String
  number: String
  expDate: DateTime
  cvv: String
}

input CreditCardUpdateOneInput {
  create: CreditCardCreateInput
  update: CreditCardUpdateDataInput
  upsert: CreditCardUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CreditCardWhereUniqueInput
}

input CreditCardUpsertNestedInput {
  update: CreditCardUpdateDataInput!
  create: CreditCardCreateInput!
}

input CreditCardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  expDate: DateTime
  expDate_not: DateTime
  expDate_in: [DateTime!]
  expDate_not_in: [DateTime!]
  expDate_lt: DateTime
  expDate_lte: DateTime
  expDate_gt: DateTime
  expDate_gte: DateTime
  cvv: String
  cvv_not: String
  cvv_in: [String!]
  cvv_not_in: [String!]
  cvv_lt: String
  cvv_lte: String
  cvv_gt: String
  cvv_gte: String
  cvv_contains: String
  cvv_not_contains: String
  cvv_starts_with: String
  cvv_not_starts_with: String
  cvv_ends_with: String
  cvv_not_ends_with: String
  AND: [CreditCardWhereInput!]
  OR: [CreditCardWhereInput!]
  NOT: [CreditCardWhereInput!]
}

input CreditCardWhereUniqueInput {
  id: ID
}

type Customer {
  id: ID!
  name: String!
  email: String!
}

type CustomerConnection {
  pageInfo: PageInfo!
  edges: [CustomerEdge]!
  aggregate: AggregateCustomer!
}

input CustomerCreateInput {
  name: String!
  email: String!
}

input CustomerCreateOneInput {
  create: CustomerCreateInput
  connect: CustomerWhereUniqueInput
}

type CustomerEdge {
  node: Customer!
  cursor: String!
}

enum CustomerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CustomerPreviousValues {
  id: ID!
  name: String!
  email: String!
}

type CustomerSubscriptionPayload {
  mutation: MutationType!
  node: Customer
  updatedFields: [String!]
  previousValues: CustomerPreviousValues
}

input CustomerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerWhereInput
  AND: [CustomerSubscriptionWhereInput!]
  OR: [CustomerSubscriptionWhereInput!]
  NOT: [CustomerSubscriptionWhereInput!]
}

input CustomerUpdateDataInput {
  name: String
  email: String
}

input CustomerUpdateInput {
  name: String
  email: String
}

input CustomerUpdateOneRequiredInput {
  create: CustomerCreateInput
  update: CustomerUpdateDataInput
  upsert: CustomerUpsertNestedInput
  connect: CustomerWhereUniqueInput
}

input CustomerUpsertNestedInput {
  update: CustomerUpdateDataInput!
  create: CustomerCreateInput!
}

input CustomerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [CustomerWhereInput!]
  OR: [CustomerWhereInput!]
  NOT: [CustomerWhereInput!]
}

input CustomerWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createCreditCard(data: CreditCardCreateInput!): CreditCard!
  updateCreditCard(data: CreditCardUpdateInput!, where: CreditCardWhereUniqueInput!): CreditCard
  updateManyCreditCards(data: CreditCardUpdateInput!, where: CreditCardWhereInput): BatchPayload!
  upsertCreditCard(where: CreditCardWhereUniqueInput!, create: CreditCardCreateInput!, update: CreditCardUpdateInput!): CreditCard!
  deleteCreditCard(where: CreditCardWhereUniqueInput!): CreditCard
  deleteManyCreditCards(where: CreditCardWhereInput): BatchPayload!
  createCustomer(data: CustomerCreateInput!): Customer!
  updateCustomer(data: CustomerUpdateInput!, where: CustomerWhereUniqueInput!): Customer
  updateManyCustomers(data: CustomerUpdateInput!, where: CustomerWhereInput): BatchPayload!
  upsertCustomer(where: CustomerWhereUniqueInput!, create: CustomerCreateInput!, update: CustomerUpdateInput!): Customer!
  deleteCustomer(where: CustomerWhereUniqueInput!): Customer
  deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderProduct(data: OrderProductCreateInput!): OrderProduct!
  updateOrderProduct(data: OrderProductUpdateInput!, where: OrderProductWhereUniqueInput!): OrderProduct
  updateManyOrderProducts(data: OrderProductUpdateInput!, where: OrderProductWhereInput): BatchPayload!
  upsertOrderProduct(where: OrderProductWhereUniqueInput!, create: OrderProductCreateInput!, update: OrderProductUpdateInput!): OrderProduct!
  deleteOrderProduct(where: OrderProductWhereUniqueInput!): OrderProduct
  deleteManyOrderProducts(where: OrderProductWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: String!
  products(where: OrderProductWhereInput, orderBy: OrderProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderProduct!]
  customer: Customer!
  shippingAddress: Address
  billingAddress: Address
  payment: CreditCard
  subtotal: Float!
  tax: Float!
  total: Float!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  status: String!
  products: OrderProductCreateManyInput
  customer: CustomerCreateOneInput!
  shippingAddress: AddressCreateOneInput
  billingAddress: AddressCreateOneInput
  payment: CreditCardCreateOneInput
  subtotal: Float!
  tax: Float!
  total: Float!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
  subtotal_ASC
  subtotal_DESC
  tax_ASC
  tax_DESC
  total_ASC
  total_DESC
}

type OrderPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: String!
  subtotal: Float!
  tax: Float!
  total: Float!
}

type OrderProduct {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  imageURL: String!
  description: String!
  price: Float!
  quantity: Int!
}

type OrderProductConnection {
  pageInfo: PageInfo!
  edges: [OrderProductEdge]!
  aggregate: AggregateOrderProduct!
}

input OrderProductCreateInput {
  title: String!
  imageURL: String!
  description: String!
  price: Float!
  quantity: Int!
}

input OrderProductCreateManyInput {
  create: [OrderProductCreateInput!]
  connect: [OrderProductWhereUniqueInput!]
}

type OrderProductEdge {
  node: OrderProduct!
  cursor: String!
}

enum OrderProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  imageURL_ASC
  imageURL_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  quantity_ASC
  quantity_DESC
}

type OrderProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  imageURL: String!
  description: String!
  price: Float!
  quantity: Int!
}

type OrderProductSubscriptionPayload {
  mutation: MutationType!
  node: OrderProduct
  updatedFields: [String!]
  previousValues: OrderProductPreviousValues
}

input OrderProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderProductWhereInput
  AND: [OrderProductSubscriptionWhereInput!]
  OR: [OrderProductSubscriptionWhereInput!]
  NOT: [OrderProductSubscriptionWhereInput!]
}

input OrderProductUpdateDataInput {
  title: String
  imageURL: String
  description: String
  price: Float
  quantity: Int
}

input OrderProductUpdateInput {
  title: String
  imageURL: String
  description: String
  price: Float
  quantity: Int
}

input OrderProductUpdateManyInput {
  create: [OrderProductCreateInput!]
  update: [OrderProductUpdateWithWhereUniqueNestedInput!]
  upsert: [OrderProductUpsertWithWhereUniqueNestedInput!]
  delete: [OrderProductWhereUniqueInput!]
  connect: [OrderProductWhereUniqueInput!]
  disconnect: [OrderProductWhereUniqueInput!]
}

input OrderProductUpdateWithWhereUniqueNestedInput {
  where: OrderProductWhereUniqueInput!
  data: OrderProductUpdateDataInput!
}

input OrderProductUpsertWithWhereUniqueNestedInput {
  where: OrderProductWhereUniqueInput!
  update: OrderProductUpdateDataInput!
  create: OrderProductCreateInput!
}

input OrderProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  imageURL: String
  imageURL_not: String
  imageURL_in: [String!]
  imageURL_not_in: [String!]
  imageURL_lt: String
  imageURL_lte: String
  imageURL_gt: String
  imageURL_gte: String
  imageURL_contains: String
  imageURL_not_contains: String
  imageURL_starts_with: String
  imageURL_not_starts_with: String
  imageURL_ends_with: String
  imageURL_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [OrderProductWhereInput!]
  OR: [OrderProductWhereInput!]
  NOT: [OrderProductWhereInput!]
}

input OrderProductWhereUniqueInput {
  id: ID
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  status: String
  products: OrderProductUpdateManyInput
  customer: CustomerUpdateOneRequiredInput
  shippingAddress: AddressUpdateOneInput
  billingAddress: AddressUpdateOneInput
  payment: CreditCardUpdateOneInput
  subtotal: Float
  tax: Float
  total: Float
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  products_every: OrderProductWhereInput
  products_some: OrderProductWhereInput
  products_none: OrderProductWhereInput
  customer: CustomerWhereInput
  shippingAddress: AddressWhereInput
  billingAddress: AddressWhereInput
  payment: CreditCardWhereInput
  subtotal: Float
  subtotal_not: Float
  subtotal_in: [Float!]
  subtotal_not_in: [Float!]
  subtotal_lt: Float
  subtotal_lte: Float
  subtotal_gt: Float
  subtotal_gte: Float
  tax: Float
  tax_not: Float
  tax_in: [Float!]
  tax_not_in: [Float!]
  tax_lt: Float
  tax_lte: Float
  tax_gt: Float
  tax_gte: Float
  total: Float
  total_not: Float
  total_in: [Float!]
  total_not_in: [Float!]
  total_lt: Float
  total_lte: Float
  total_gt: Float
  total_gte: Float
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  imageURL: String!
  title: String!
  description: String!
  price: Float!
  stock: Int!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  imageURL: String!
  title: String!
  description: String!
  price: Float!
  stock: Int!
  categories: CategoryCreateManyWithoutProductsInput
}

input ProductCreateManyWithoutCategoriesInput {
  create: [ProductCreateWithoutCategoriesInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutCategoriesInput {
  imageURL: String!
  title: String!
  description: String!
  price: Float!
  stock: Int!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  imageURL_ASC
  imageURL_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  stock_ASC
  stock_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  imageURL: String!
  title: String!
  description: String!
  price: Float!
  stock: Int!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  imageURL: String
  title: String
  description: String
  price: Float
  stock: Int
  categories: CategoryUpdateManyWithoutProductsInput
}

input ProductUpdateManyWithoutCategoriesInput {
  create: [ProductCreateWithoutCategoriesInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCategoriesInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCategoriesInput!]
}

input ProductUpdateWithoutCategoriesDataInput {
  imageURL: String
  title: String
  description: String
  price: Float
  stock: Int
}

input ProductUpdateWithWhereUniqueWithoutCategoriesInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCategoriesDataInput!
}

input ProductUpsertWithWhereUniqueWithoutCategoriesInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCategoriesDataInput!
  create: ProductCreateWithoutCategoriesInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  imageURL: String
  imageURL_not: String
  imageURL_in: [String!]
  imageURL_not_in: [String!]
  imageURL_lt: String
  imageURL_lte: String
  imageURL_gt: String
  imageURL_gte: String
  imageURL_contains: String
  imageURL_not_contains: String
  imageURL_starts_with: String
  imageURL_not_starts_with: String
  imageURL_ends_with: String
  imageURL_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  stock: Int
  stock_not: Int
  stock_in: [Int!]
  stock_not_in: [Int!]
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  categories_every: CategoryWhereInput
  categories_some: CategoryWhereInput
  categories_none: CategoryWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  creditCard(where: CreditCardWhereUniqueInput!): CreditCard
  creditCards(where: CreditCardWhereInput, orderBy: CreditCardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CreditCard]!
  creditCardsConnection(where: CreditCardWhereInput, orderBy: CreditCardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CreditCardConnection!
  customer(where: CustomerWhereUniqueInput!): Customer
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer]!
  customersConnection(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderProduct(where: OrderProductWhereUniqueInput!): OrderProduct
  orderProducts(where: OrderProductWhereInput, orderBy: OrderProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderProduct]!
  orderProductsConnection(where: OrderProductWhereInput, orderBy: OrderProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderProductConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  creditCard(where: CreditCardSubscriptionWhereInput): CreditCardSubscriptionPayload
  customer(where: CustomerSubscriptionWhereInput): CustomerSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderProduct(where: OrderProductSubscriptionWhereInput): OrderProductSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  isAdmin_ASC
  isAdmin_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  isAdmin: Boolean
  isAdmin_not: Boolean
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`