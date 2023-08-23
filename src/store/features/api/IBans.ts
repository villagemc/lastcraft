interface IBan {
  target?: string,
  skin?: string,
  source?: string,
  reason?: string,
  startTime?: string,
  expires?: string,
  permanent?: boolean
}

interface ITotal {
  bans: IBan[];
  total: number;
}

export interface IBans {
  response: ITotal;
  errors: null;
}

// аргументы для fetch
export interface IBansArgument {
  number: number;
  search?: string;
}