module.exports = {
  getAll: (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_inventory()
      .then(products => {
        res.status(200).send(products);
      }).catch(error => {
        console.log('error in getAll', error);
        res.sendStatus(500);
      })
  },

  getOne: (req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params
    dbInstance.get_one( id )
      .then(product => {
        res.status(200).send(product);
      }).catch(error => {
        console.log('error in getAll', error);
        res.sendStatus(500);
      })
  },

  create: (req, res) => {
    const dbInstance = req.app.get('db');
    const { product_name, price, image_url } = req.body;
    dbInstance.create_product( [product_name, price, image_url] )
      .then( () => {
        res.sendStatus(200);
      }).catch(error => {
        console.log('error in create', error);
        res.sendStatus(500);
      })
  },

  edit: (req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    const { product_name, price, image_url } = req.body;
    dbInstance.edit_product( [product_name, price, image_url, id] )
      .then( () => {
        res.sendStatus(200);
      }).catch(error => {
        console.log('error in edit', error);
        res.sendStatus(500);
      })
  },

  delete: (req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    console.log("delete in server", id)
    dbInstance.delete_product( Number(id) )
      .then( () => {
        res.sendStatus(200);
      }).catch(error => {
        console.log('error in delete', error);
        res.sendStatus(500);
      })
  }
}