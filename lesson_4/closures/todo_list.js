function makeList() {
  let list = [];
  return function(item) {
    if (item === undefined) {
      if (list.length === 0) {
        console.log('The list is empty.');
      } else {
        list.forEach(element => console.log(element));
      }
    } else {
      if (list.includes(item)) {
        list.splice(list.indexOf(item), 1);
        console.log(item + ' removed!');
      } else {
        list.push(item);
        console.log(item + ' added!');
      }
    }
  };
}

let list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();
