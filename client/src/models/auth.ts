export interface payloadLogin {
  account?: string;
  password?: string;
}

export interface payloadRegister {
  firstName: string;
  surnName: string;
  account: string;
  password: string;
  date: number;
  month: number;
  year: number;
  gender?: 0 | 1 | 2;
  pronounce?: "-1" | "0" | "1" | "2";
  pronounceCustom: "";
}

