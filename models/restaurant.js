'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate (models) {
      Restaurant.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Restaurant.hasMany(models.Comment, { foreignKey: 'restaurantId' })
      Restaurant.belongsToMany(models.User, {
        through: models.Favorite, // 透過 Favorite 表來建立關聯
        foreignKey: 'restaurantId', // 對 Favorite 表設定 FK
        as: 'FavoritedUsers' // 幫這個關聯取個名稱
      })
      Restaurant.belongsToMany(models.User, {
        through: models.Like,
        foreignKey: 'restaurantId',
        as: 'LikedUsers'
      })
    }
  }
  Restaurant.init(
    {
      name: DataTypes.STRING,
      tel: DataTypes.STRING,
      openingHours: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      address: DataTypes.STRING,
      viewCounts: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Restaurant',
      tableName: 'Restaurants',
      underscored: true
    }
  )
  return Restaurant
}
