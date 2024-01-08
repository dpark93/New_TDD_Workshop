// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.
export let inventory: Array<Movie> = [];

export class Movie {
  title: string;
  inStock: boolean;
  daysRented: number;

  constructor(title: string) {
    this.title = title;
    this.inStock = true;
    this.daysRented = 0;
  }

  rentMovie() {
    if(!this.inStock){
        return 'Please insert another quarter'
    }
    this.inStock = false;
  }

  returnMovie(){
    this.inStock = true;
  }

  totalCost(days: number): number{
    this.daysRented = days;
    return this.daysRented * 2.00
  }

  returnCost(){
    return this.daysRented * 2.00
  }

  checkAvailable(){
    if(!this.inStock){
        return 'not in stock'
    }
    return 'in stock'
  }

  incrementDaysRented(){
    this.daysRented ++
    return this.daysRented
  }

}

export function addMovie(movie: Movie) {
  inventory.push(movie);
}



export class Customer {
    name: string;
    rentals: Array<Movie>;
  
    constructor(name: string) {
      this.name = name;
      this.rentals = [];
    }
  
    rentMovie(movie: Movie) {
      this.rentals.push(movie);
      movie.incrementDaysRented();
    }
  
    calculateRentalFees(): number {
      let cost = 0;
      this.rentals.forEach((rental) => {
        cost += rental.daysRented;
      });
  
      return cost;
    }
  }
  