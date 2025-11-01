/* 
employ bind function that works as shown in usage
do not use ES 6
tip - use arguments, apply, closure  
*/

const user = {
  firstName: "Bill"
};
function add(a, b, c) {
  return `${this.firstName} adds ${a + b + c}`;
}
function bind(fn, args) {
  
}


// usage
bind(add, user)(1, 2, 3); // Bill adds 6
bind(add, user, 1)(2, 3); // Bill adds 6
bind(add, user, 1, 2, 3)(); // Bill adds 6
bind(add, user, 1, 2, 3)(4, 5, 6); // Bill adds 6
