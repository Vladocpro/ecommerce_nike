
export type User = {
   id: String,
   email: String,
   password: String,
   savedProducts: String[],
   orders: String[]
}

export type Product = {
   id: String,
   title: String,
   description: String,
   sizes: String[],
   sale: Number,
   releaseDate: Date,
   category: String
}
export type Order = {
   id: String,
   tracking_number: String,
   productId: String
}
export type LoginForm = {
   email: string,
   password: string,
   repPassword: string
}
export type Auth = {
   email: string,
   password: string,
}
