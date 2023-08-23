export interface IProduct {
  id: number,
  price: number,
  type: string,
  typeId: number,
  name: string,
  description?: string,
  amount: number,
  image: string,
}

export interface IProducts {
  response: IProduct[];
  errors: null;
}