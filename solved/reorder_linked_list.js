var reorderList = function(head) {
  let arr = [];
  let curr = head;
  
  while (curr) {
      arr.push(curr);
      curr = curr.next;
  }
  
  for (let i = 0; i < arr.length - 1; i++) {
      let j = arr.length-i-1;
      if (i >= j) {arr[i].next = null; break;}
      arr[i].next = arr[j];
      arr[j].next = arr[i+1];
  }
  
  return arr[0]
};