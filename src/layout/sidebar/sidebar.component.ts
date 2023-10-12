import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  showFiller = false;
  isSideNavOpen: boolean = false; // Initialize it to your default state
  isSidebarClosed = true; // Initialize the sidebar as closed
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
 
  constructor() {
    // Define types for your functions and variables if needed
  }

  openNav() {
    const mySidenav = document.getElementById("mySidenav") as HTMLElement;
    console.log("abcd", mySidenav);
    this.isSideNavOpen = true;
    if (mySidenav) {
      mySidenav.style.width = "250px";
    }
  }

  closeNav() {
    const mySidenav = document.getElementById("mySidenav") as HTMLElement;
    console.log("abcd", mySidenav);
    this.isSideNavOpen = false;
    if (mySidenav) {
      mySidenav.style.width = "0";
    }
  }

  ngAfterViewInit() {
    // You can also add type annotations for your HTML elements if you want
    const openButton = document.getElementById("openButton") as HTMLElement;

    // Add an event listener to the HTML element
    if (openButton) {
      openButton.addEventListener("click", this.openNav);
    }

    // Open the sidebar by default when the component is loaded
    this.openNav();
  }
}
