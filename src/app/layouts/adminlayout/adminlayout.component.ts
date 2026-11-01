import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.css'
})
export class AdminlayoutComponent {
  constructor(private us: UserService, private router: Router) { }
  logout() {
    this.us.logout().subscribe(data => {
      localStorage.removeItem('user')
      alert("Logout Successfully")
      this.router.navigate(['/login'])
    })

  }
}
