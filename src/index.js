// @flow

import Sequelize, { type Model } from "sequelize";
import { type Empire } from "./empire";

const sequelize = new Sequelize(
  "postgres://postgres:sequelize@localhost:5432/sqldemo"
);

const main = async () => {
  const EmpireModel: Class<Model<Empire>> = await require("./empire")(
    sequelize
  );
  const empire: Model<Empire> = await EmpireModel.create({
    name: "Sildaran Republic",
    species: "Sildar",
    homeworld: "Sakatarola"
  });

  const empires = await EmpireModel.findAll();
  console.log(empires);

  empires.map(empire => {
    console.log("[Empire]           ", empire.name);
    console.log("[Founding Species] ", empire.species);
    console.log("[Homeworld]        ", empire.homeworld);
  });
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
