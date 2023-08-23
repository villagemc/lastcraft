interface IRow {
  id: number;
  row: string;
  typeId: number;
}

interface IRule {
  rows: IRow[];
  type: {
    id: number;
    name: string;
  }
}

export interface IRules {
  response: IRule[];
  errors: null;
}