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
  }
}