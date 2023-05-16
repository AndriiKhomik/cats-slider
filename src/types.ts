export interface Breed {
  id: string;
  name: string;
}

export interface Cat {
  id: string;
  breeds: Breed[];
  url: string;
}
