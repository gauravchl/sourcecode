// Creat hash table for customers
// Key = Phone

var table = {

  customers: new Array(100),


  getHash(key) {
    if (!key) return;
    key = key.toString();
    var hash = '';
    for(var i = 0; i<key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return parseInt(hash) % table.customers.length
  },

  addCustomer(customer) {
    var hash = table.getHash(customer.phone);
    if(!table.customers[hash] || !table.customers[hash].length) {
      table.customers[hash] = [customer];
    } else {
      table.customers[hash].push(customer);
    }
  },

  findCustomer(phone) {
    var hash = table.getHash(phone);
    var customersAtIndex = table.customers[hash]
    if (!customersAtIndex || !customersAtIndex.length) return;
    for(var i = 0; i < customersAtIndex.length ; i++) {
      if (customersAtIndex[i].phone == phone) return customersAtIndex[i];
    }
  }
};
