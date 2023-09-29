let factconstruc = (name, age) => {
    //this.name=name;//not required in factory function 
    const sayhello = () => {
        console.log(`hello ${name}`);
    }
    return {name, age,sayhello};//curly braces return objects
}//this is a factory obj constructor


const haris = factconstruc('hari', 21);
console.log(haris.name);
haris.sayhello();