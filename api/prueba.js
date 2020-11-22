module.exports = (req,res) => {
  const { nombre = 'Miguel Fernández'} = req.query
  res.status(200).send(`Prueba de ${nombre} `)
};

