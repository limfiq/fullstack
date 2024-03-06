import {Sequelize} from "Sequelize";
const db=new Sequelize('menu','root','',{
	host:'localhost',
	dialect:'mysql'
});

export default db;