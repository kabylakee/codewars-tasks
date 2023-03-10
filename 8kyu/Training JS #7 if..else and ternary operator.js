/**
 * Complete function, n is the number of hotdogs a customer will buy,
 * different numbers have different prices,
 *  return how much money will the customer spend to buy that number of hotdogs.
 */

const saleHotdogs = (n) => n * (n < 5 ? 100 : n < 10 ? 95 : 90);
