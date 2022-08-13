import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get('/')
  getAllMovies() {
    return this.moviesService.getAllMovies();
  }

  @Get(':id')
  getMovieById(@Param() id: string) {
    return this.moviesService.getMovieById(parseInt(id));
  }
}
