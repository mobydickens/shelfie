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
  create: (req, res) => {
    const dbInstance = req.app.get('db');
    const { product_name, price, image_url } = req.body;
    dbInstance.create_product( [product_name, price, image_url] )
      .then( () => {
        res.sendStatus(200);
      })
  }
}