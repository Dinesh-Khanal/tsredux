type GeoModel = {
  lat: string;
  lng: string;
};

type CompanyModel = {
  name: string;
  catchPhrase: string;
  bs: string;
};
type AddressModel = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoModel;
};
export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressModel;
  phone: string;
  website: string;
  company: CompanyModel;
}
export interface UsersModel {
  users: UserModel[];
}
