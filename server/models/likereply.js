
module.exports = (sequelize, DataTypes) => {
  const LikeReply = sequelize.define('LikeReply', {
    like: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {});
  LikeReply.associate = (models) => {
    LikeReply.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });

    LikeReply.belongsTo(models.Reply, {
      foreignKey: 'replyId',
      targetKey: 'id',
      onDelete: 'CASCADE'
    });
  };
  return LikeReply;
};
