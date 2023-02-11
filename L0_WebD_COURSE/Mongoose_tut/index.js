const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/aryanKart');
    // console.log("we are connected bro");
}






const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting = "My name is " + this.name
    console.log(greeting);
};

const Kitten = mongoose.model('aryanKitty', kittySchema);





 const aryanKitty = new Kitten({ name: 'aryanKitty' });
const aryanKitty2 = new Kitten({ name: 'aryanKitty2' });
// console.log(aryanKitty.name);
// aryanKitty.speak();






aryanKitty.save(function (err, aryanKitty) {
    if (err) return console.error(err);
    aryanKitty.speak();
})
aryanKitty2.save(function (err, k) {
    if (err) return console.error(err);
    k.speak();
})






Kitten.find({ name: "aryanKitty2" }, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})