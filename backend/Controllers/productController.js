const products = [
    {
      id: 1,
      name: "Madara Uchiha Figure",
      price: 370000,
      image: "madara.png"
    },
    {
      id: 2,
      name: "Kakashi Hatake Figure",
      price: 380000,
      image: "kakashi.png"
    },
    {
      id: 3,
      name: "Naruto Uzumaki Figure",
      price: 1850000,
      image: "naruto.png"
    }
  ];
  
  exports.getProducts = (req, res) => {
    res.json(products);
  };
  