import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
