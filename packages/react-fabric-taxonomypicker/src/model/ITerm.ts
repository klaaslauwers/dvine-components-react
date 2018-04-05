export interface ITerm {
  id: string;
  name: string;
  path: string;
  properties?: ITermProperties;
}

export interface ITermProperties {
  isSelectable?: boolean;
  children?: ITerm[];
  parentId?: string | null;
}
