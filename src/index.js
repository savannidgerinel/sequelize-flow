// @flow

import Sequelize, { type Model } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:sequelize@localhost:5432/sqldemo"
);

const main = async () => {
  const Empire: Class<Model<Empire>> = await require("./empire")(sequelize);
  const empire: Empire = await Empire.create({
    name: "Sildaran Republic",
    species: "Sildar",
    homeworld: "Sakatarola"
  });

  const empires = await Empire.findAll();
  console.log(empires);

  empires.map(empire => {
    console.log("[Empire]           ", empire.name);
    console.log("[Founding Species] ", empire.name);
    console.log("[Homeworld]        ", empire.homeworld);
  });
  Empire.destroy({ truncate: true });
};

console.log("Starting demo");
main()
  .then(_res => {
    console.log("demo finished");
    process.exit();
  })
  .catch(err => {
    console.log("promise rejected", err);
    process.exit();
  });
