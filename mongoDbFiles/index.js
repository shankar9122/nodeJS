const dbConnection = require("./mongodb");


const main = async () => {
    let data = await dbConnection();
    data = await data.find({}).toArray();
    console.log(data);
}

main()