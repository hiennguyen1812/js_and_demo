function animal(name, age) {
	this.name = name
	this.age = age
}

var myAnimal = new animal('Cho', 5)
document.write("Tên thú cưng là: " + myAnimal.name + "</br>")
document.write("Tuổi của thú cưng là: " + myAnimal.age + "</br>")