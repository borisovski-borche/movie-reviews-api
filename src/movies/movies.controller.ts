import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './create-movie.dto';
import { MoviesService } from './movies.service';
import { UpdateMovieDto } from './update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get('/')
  getAllMovies(@Query('orderBy') orderBy: string) {
    return this.moviesService.getAllMovies(orderBy);
  }

  @Get('/:id')
  getMovieById(@Param('id') id: string) {
    return this.moviesService.getMovieById(parseInt(id));
  }

  @Post('/')
  async createNewMovie(@Body() body: CreateMovieDto) {
    return await this.moviesService.createNewMovie(body);
  }

  @Post('/many')
  async createManyMovies(@Body() body: CreateMovieDto[]) {
    return await this.moviesService.createMultipleMovies(body);
  }

  @Patch('/:id')
  updateMovie(@Param('id') id: string, @Body() body: UpdateMovieDto) {
    return this.moviesService.updateMovie(parseInt(id), body);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return this.moviesService.deleteMovie(parseInt(id));
  }
}
