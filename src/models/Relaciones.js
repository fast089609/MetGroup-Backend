import { Store } from './Tiendas.js';
import { Article } from './Articulos.js';
import { User } from './Usuario.js';

//relacion de los articulos con las tiendas
Store.hasMany(Article, { onDelete: 'CASCADE' });
Article.belongsTo(Store, { onDelete: 'CASCADE' });

//relacion de los usuarios con sus tiendas
User.hasMany(Store, { onDelete: 'CASCADE' });
Store.belongsTo(User, { onDelete: 'CASCADE' });
