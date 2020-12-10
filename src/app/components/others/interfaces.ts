

export interface LoginResponse {
  id: Number,
  name: String,
  username: String
  address: Address
}

export interface Address {
  street: String,
  city: String,
}
