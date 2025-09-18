import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    title = 'Welcome to my docker application updated ! Pipeline running';
  statuses = [
    { text: 'Now login is done', ok: true },
    { text: 'Access token modified', ok: true },
    { text: 'suceess !', ok: true },
    { text: 'Deployed to server ---', ok: true }
  ];
}
