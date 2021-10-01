import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
    Query: {
        movies: (_, { rating, limit, sort, genre }) => getMovies(limit, rating, sort, genre),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id),
    }
}

export default resolvers;