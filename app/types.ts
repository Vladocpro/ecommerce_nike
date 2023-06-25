
export type User = {
   id:            string,
   email?:         string,
   password?:      string,
   orders:        string[],
   favorites:     Product[],
   cart:          Product[],
   createdAt:     Date,
   updatedAt:     Date,
}

export type Product = {
   id          :string,
   title       :string,
   description :string,
   price       :number
   sizes       :string[],
   images      :{title: string, isAvailable: boolean}[],
   category    :String,
   gender      :string,
   sale        :number,
   quantity?   :number,
   size?       :number
}
export type Order = {
   id              :String
   tracking_number :String
   userId          :String
   paymentIntent   :String
   sessionId       :String
   currency        :String
   items           :any[]
   amountSubtotal  :number
   shipping        :number
   amountTotal     :number
   date            :String
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
