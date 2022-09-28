export default class BookstoreService {
  
  data = [
    {
      id: 1,
      title: "Eloquent Java Script",
      author: "Maraij Haverbake",
      price: 18,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "Learning React",
      author: "Alex Banks & Eva Parcello",
      price: 30,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg",
    },
  ]

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75){
          reject(new Error (`Something bad happened`));
        } else {
          resolve(this.data);
        }
      }, 1500);
    });
  }
}
