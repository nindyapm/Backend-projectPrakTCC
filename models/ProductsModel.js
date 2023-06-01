import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('products',{
    namaProduct: DataTypes.STRING,
    deskripsiProduct: DataTypes.STRING,
    hargaProduct: DataTypes.STRING,
    persediaan:DataTypes.STRING
},{
    freezeTableName:true
});

export default Product;

(async()=>{
    await db.sync();
})();