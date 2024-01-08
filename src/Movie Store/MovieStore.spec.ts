//dont forget to import your functions
import { Movie } from "./MovieStore";

describe("Movie Store", () => {
    test("rentMovie() should set inStock to false for a movie", () => {
        let movie1 = new Movie("Top Gun");
        let movie2 = new Movie("Titanic");
      
        movie1.rentMovie();
      
        expect(movie1.inStock).toBe(false);
        expect(movie2.inStock).toBe(true);

        movie1.returnMovie();

        expect(movie1.inStock).toBe(true);
      });

      test("totalCost() should return price of the movie total", () => {
        let movie1 = new Movie("Top Gun");
        let movie2 = new Movie("Titanic");
      
        movie1.totalCost(4);
      
        expect(movie1.daysRented).toBe(4);
        expect(movie1.returnCost()).toBe(8);
      });

      test("check if movie is in stock", () => {
        let movie1 = new Movie("Top Gun");
        let movie2 = new Movie("Titanic");
        expect(movie1.incrementDaysRented()).toBe(1);
        movie1.rentMovie();
 
      
        expect(movie1.checkAvailable()).toBe('not in stock');
        expect(movie2.checkAvailable()).toBe('in stock');

        expect(movie1.rentMovie()).toBe('Please insert another quarter');
      });



});
