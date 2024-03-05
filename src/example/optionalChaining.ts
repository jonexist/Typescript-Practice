type Customer = {
  readonly id: number;
  name: string;
  age: number;
  salary: number;
  address?: {
    city: string;
    state: string;
  };
};

const getCustomer = (id: number): Customer | null => {
  return id === 0
    ? null
    : {
        id,
        name: 'John',
        age: 30,
        salary: 1000,
        address: { city: 'New York', state: 'NY' },
      };
};

const customer = getCustomer(1);
console.log(customer?.address?.city);
