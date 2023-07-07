let invoice = {
  unpaid: [],
  paid: [],
  add(name, amount) {
    if (!(typeof name === 'string' && typeof amount === 'number')) {
      return;
    }

    this.unpaid.push({
      name,
      amount,
    });
  },
  totalDue() {
    return this.unpaid.reduce((total, { amount }) => total += amount, 0);
  },
  payInvoice(name) {
    let updatedUnpaid = [];
    this.unpaid.forEach(invoice => {
      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        updatedUnpaid.push(invoice);
      }
    });

    this.unpaid = updatedUnpaid;
  },
  totalPaid() {
    return this.paid.reduce((total, { amount }) => total += amount, 0);
  }
};

invoice.add('Due North Development', 250);
invoice.add('Moonbeam Interactive', 187.50);
invoice.add('Slough Digital', 300);
console.log(invoice.totalDue());

invoice.payInvoice('Due North Development');
invoice.payInvoice('Slough Digital');
console.log(invoice.totalPaid());
console.log(invoice.totalDue());
