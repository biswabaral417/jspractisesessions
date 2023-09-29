//very tough concept closures
const counterCreator = () => {
    let count=5;
    
    return () => {
        console.log(count);
        count++;
    };
  };
  
  const counter = counterCreator();

  counterCreator()();///this calls whole function thus count becomes 5 always
//   counterCreator()();
  
  counter();//this calls return value function which asks for value of count from function only once then updates and uses it forever 
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();