
type SecretObject = {
  [key: string]: {
    name: string;
    value: { secret: string };
    description: string;
  };
};
