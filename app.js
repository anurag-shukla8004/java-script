let name = {
  firstname: "anurag",
  secondname: "shukla",
  printfull: function(){
   console.log(this.firstname + " " + this.secondname);
  }
}

name.printfull();