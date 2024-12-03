import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeService } from './joke.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'joke-generator';
  joke = 'jokes coming soon ... ';

  constructor(private jokeService: JokeService) {}

  getJokes() {
    this.jokeService.get().subscribe((response) => {
      this.joke = response.joke;
    });
  }
}
