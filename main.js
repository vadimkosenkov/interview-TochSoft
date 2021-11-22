const changeString = (string) => {
  console.log(string[0].toUpperCase() + string.slice(1).toLowerCase());
};

const sayHello = (name) => {
  console.log(`${name === "Mark" ? "Hi" : "Hello"}, ${name}!`);
};

const filterStrings = (arr, number) => {
  console.log(arr.filter((elem) => elem.length <= number));
};

changeString("пиТeР");
changeString("javaScript");
sayHello("Oleg");
sayHello("Viktor");
sayHello("Mark");
filterStrings(["a", "ab", "abc", "ABCDE"], 2);
