export interface Character {
  id: number;
  name: string;
  age: number;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string,
    url: string,
  }
  location: {
    name: string,
    url: string,
  };
  created: Date;
  episode: string[];
}
