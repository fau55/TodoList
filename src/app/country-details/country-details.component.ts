import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment-timezone';
import { CountryTimezoneService } from '../country-timezone.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  selectedCountry: any;
  countryRegion: string = '';
  countryTimeZones: string = '';
  cuntryName: string = '';
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  utcOffset: any;
  day = '';
  time: any;
  
  @ViewChild('img', { static: true }) img!: ElementRef;

  regionImageMap: { [key: string]: string } = {
    'Europe': '../../assets/europe1.jpg',
    'Asia': '../../assets/asia.png',
    'Africa': '../../assets/africa.jpg',
    'North America': '../../assets/n-america.png',
    'Oceania': '../../assets/Australia.webp',
    'South America': '../../assets/s-america.jpg',
    'Antarctica': '../../assets/antratica.jpg',
    'Americas': '../../assets/n-america.png'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryTimezoneService: CountryTimezoneService // Inject the service
  ) { }

  ngOnInit(): void {

    this.countryTimezoneService.getData().subscribe((data: any) => {
      this.selectedCountry = data;
      this.countryRegion = data.region;
      this.countryTimeZones = data.timezones;
      this.cuntryName = data.name.common


      if (this.countryRegion && this.regionImageMap[this.countryRegion]) {

        this.img.nativeElement.style.backgroundImage = `url('${this.regionImageMap[this.countryRegion]}')`;
      }

    })
     this.utcOffset = parseInt(this.countryTimeZones[0].split("UTC")[1]);
    setInterval(() => {
      this.getTimezonesData();
    }, 1000);
  }

  getTimezonesData(): void {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = this.utcOffset;
    const usa = utc + (3600000 * offset);
    const usaTimeNow = new Date(usa);
    this.day = this.days[usaTimeNow.getDay()];
    this.time = usaTimeNow.toLocaleString();
  }
}

