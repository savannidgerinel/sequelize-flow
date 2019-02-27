// @flow

import Sequelize, { type Model } from "sequelize";

export type Empire = {
  name: string,
  species: string,
  homeworld: string
};

const EmpireModel = (sequelize: Sequelize): Class<Model<Empire>> =>
  sequelize.define("empires", {
    name: { type: Sequelize.STRING, allowNull: false },
    species: { type: Sequelize.STRING, allowNull: false },
    homeworld: { type: Sequelize.STRING, allowNull: false }
  });

module.exports = EmpireModel;
