var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('users', {
        id: { type: 'serial', primaryKey: true },
        email: { type: 'varchar(64)', unique: true },
        pass: 'text',
        salt: 'varchar(34)',
        department: 'varchar(32)',
        admin: { type: 'boolean', defaultValue: false }
    }, callback)
};

exports.down = function(db, callback) {
    db.dropTable('users', callback);
};