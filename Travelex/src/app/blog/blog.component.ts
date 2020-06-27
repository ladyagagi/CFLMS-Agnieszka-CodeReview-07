import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  blogarr: any = [
    {
      title: "into the blue",
      img: "../../assets/img_blog/meer.jpg",
      wo: "Greece",
      was: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      wann: "25.08.2019"
    },{
      title: "late summer",
      img: "../../assets/img_blog/bergen.jpg",
      wo: "Norway",
      was: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      wann: "02.09.2019"
    },{
      title: "beautiful autoumn",
      img: "../../assets/img_blog/veitsch1.jpg",
      wo: "Styria",
      was: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      wann: "25.10.2019"
    },{
      title: "Lunzer lake",
      img: "../../assets/img_blog/lunz.jpeg",
      wo: "Upper Austria",
      was: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      wann: "16.12.2019"
    },{
      title: "snow & ski",
      img: "../../assets/img_blog/tirol.jpg",
      wo: "Tirol",
      was: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      wann: "17.02.2020"
    },{
      title: "green mountains",
      img: "../../assets/img_blog/unterberg.jpg",
      wo: "Austria",
      was: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      wann: "25.05.2020"
    }

  ];


  ngOnInit(): void {
  }

}
