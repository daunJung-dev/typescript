type Video = {
  title: string;
  author: string;
  description: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P]; // for ...in
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type VideoOptional = Optional<Video>;

type Animal = {
  name: string;
  age: number;
};

type AnimalOptional = Optional<Animal>;

const animal: AnimalOptional = {
  age: 13,
};
const videoOp: VideoOptional = {};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

const obj3: Nullable<Video> = {
  title: null,
  author: null,
  description: null,
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};

// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
//   readonly description: string;
// };
