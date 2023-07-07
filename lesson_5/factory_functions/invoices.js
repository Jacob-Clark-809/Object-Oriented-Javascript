function createPayment(services) {
  services = services || {};
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
  };

  payment.total = function() {
    return payment.amount || payment.phone + payment.internet;
  };

  return payment;
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

function createInvoice(services) {
  let phone = 3000;
  let internet = 5500;
  let payments = [];
  if (services) {
    phone = services.phone || phone;
    internet = services.internet || internet;
  }

  return {
    total() {
      return phone + internet;
    },

    addPayment(payment) {
      payments.push(payment);
    },

    addPayments(...args) {
      payments = payments.concat(...args);
    },

    amountDue() {
      let totalPaid = payments.reduce((sum, payment) => {
        return sum + payment.total();
      }, 0);

      return this.total() - totalPaid;
    }
  };
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000


let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
