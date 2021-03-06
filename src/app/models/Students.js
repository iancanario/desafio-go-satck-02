import Sequelize, { Model } from 'sequelize';

class Students extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.STRING,
        height: Sequelize.STRING,
        weight: Sequelize.STRING,

      },
      {
        sequelize,
        modelName: 'students'
      },
    );

    return this;
  }
}

export default Students;