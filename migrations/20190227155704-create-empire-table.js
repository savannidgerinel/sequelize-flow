module.exports = {
  up: (queryInterface, { DATE, INTEGER, STRING }) => queryInterface.createTable('empires', {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: STRING, allowNull: false },
    species: { type: STRING, allowNull: false },
    homeworld: { type: STRING, allowNull: false },
    createdAt: DATE,
    updatedAt: DATE,
  }),

  down: queryInterface => queryInterface.dropTable('empires'),
};
