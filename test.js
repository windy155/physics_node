var sortList = function(head) {
  if(head == null || head == undefined || head.length == 0 ){
      return [];
  }
  if(head.length == 1){
      return head;
  }
  let start = 0;
  let left = [],
      right = [];
  for(let i = 1;i<head.length;i++){
      if(head[i]<head[start]){
          left.push(head[i]);
      }else{
          right.push(head[i]);
      }
  }
  left = sortList(left);
  right = sortList(right);
  return left.concat(head[start]).concat(right);
};

console.log(sortList([2,5,1,3,8,4,6]));