import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get('/')
  getAllMovies() {
    console.log('TEST');
    return this.moviesService.getAllMovies();
  }
}
