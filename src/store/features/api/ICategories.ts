export interface ICategory {
  name: string;
  type: string;
  desc: string;
}

export interface ICategories {
  response: ICategory[];
  errors: null;
}