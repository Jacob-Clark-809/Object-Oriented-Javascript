function makeList() {
  let list = {};
  let items = [];

  list.list = function() {
    if (items.length !== 0) {
      items.forEach(element => console.log(element));
    } else {
      console.log('The list is empty.');
    }
  };

  list.add = function(item) {
    items.push(item);
    console.log(item + ' added!');
  };

  list.remove = function(item) {
    let index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
      console.log(item + ' removed!');
    } else {
      console.log(item + ' does not exist.');
    }
  };

  return list;
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();
