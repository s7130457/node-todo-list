const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "mariadb://root:foxconn@localhost:3306/bonnie_todo",
    {
        dialectOptions: {
            useUTC: false, // for reading from database
            timezone: "Etc/GMT0",
        },
        timezone: "Etc/GMT0", // for writing to database
    }
);

const DataTypes = Sequelize.DataTypes;
const todo = sequelize.define(
    "todo",
    {
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        finished: {
            type: DataTypes.BOOLEAN,
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "todo",
        timestamps: false,
        freezeTableName: true,
    }
);

export default todo;
