
"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { IOrder } from "../../../../type";
interface IOrderContext {
  order: IOrder;
  setOrder: Dispatch<SetStateAction<IOrder>>;
}

const OrderContext = createContext<IOrderContext>({
  order: {} as IOrder,
  setOrder: () => {},
});

export default OrderContext;
