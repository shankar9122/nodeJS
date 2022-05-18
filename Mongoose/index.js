const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    caterogy: String,
    sale: Boolean
});

const saveInDB = async () => {
    const productModal = mongoose.model("products", productSchema);

    let data = new productModal({
        name: "Oppo 9",
        price: 13000,
        brand: "oppo",
        caterogy: "mobile",
        sale: true
    })
    let result = await data.save();
    console.log(result)
};

// saveInDB();

const updateInDB = async () => {
    const productModal = mongoose.model("products", productSchema);

    let data = await productModal.updateOne({name: "Redmi 9 Pro"}, {
        $set: {sale: true}
    });
    console.log(data)
};

// updateInDB();

const deleteInDB = async () => {
    const productModal = mongoose.model("products", productSchema);
    let data = await productModal.deleteOne({name: "Redmi 10 Pro"});
    console.log(data);
}
// deleteInDB();

const findInDB = async () => {
    const productModal = mongoose.model("products", productSchema);
    let data = await productModal.find({name: "Oppo 10 pro"});
    console.log(data)
}
findInDB()