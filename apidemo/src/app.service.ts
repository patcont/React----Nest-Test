import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getUser(): Observable<AxiosResponse<[]>> {
    return this.httpService
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((response) => response.data));
  }
}
