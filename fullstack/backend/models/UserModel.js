import {Sequelize} from "sequelize";
import db from "../confiq/database.js";

const User = db.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    gender: Sequelize.STRING


}, {
    freezeTableName: true
});
export default User;

(async () => {
    await db.sync();
})();