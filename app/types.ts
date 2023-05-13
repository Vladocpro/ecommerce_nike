
export type User = {
   id:            string,
   email?:         string,
   password?:      string,
   orders:        string[],
   savedProducts: string[],
   cart:          string[],
   createdAt:     Date,
   updatedAt:     Date,
}

export type Product = {
   id          :string,
   title       :string,
   description :string,
   price       :number
   sizes       :string[],
   images      :string[],
   category    :String,
   gender      :string,
   sale        :number,
}
export type Order = {
   id:              string,
   tracking_number: string,
   productId:       string,
   userId:          string
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
