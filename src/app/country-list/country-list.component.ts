import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../country';
import Swal from 'sweetalert2';
import { CountryTimezoneService } from '../country-timezone.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  countryName: string = '';
  countries: any[] = [];
  utcOffset: any;
  countryTimeZones: string = '';
  ampm: string = '';
  hrs = 0;
  formattedDate: any;
  selectedcountryTimeZone: any

  @ViewChild('card', { static: true }) card!: ElementRef;

  constructor(private countryTimezoneService: CountryTimezoneService) { }

  ngOnInit(): void {
    this.showCountries();
  }

  showCountries() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network not Found');
        }
        return response.json();
      })
      .then((data) => {
        // Sorting the countries array alphabetically by common name
        this.countries = data.sort((a: any, b: any) => {
          return a.name.common.localeCompare(b.name.common);
        });
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }

  exploreDetails(country: any) {
    this.countryTimeZones = country.timezones;
    this.utcOffset = parseInt(this.countryTimeZones[0].split("UTC")[1]);
    this.countryDateAndTime();
    if(this.hrs >= 10 && this.ampm === 'am'){
      Swal.fire({
        icon: 'warning',
        text: 'cannot Access this country after 10am'
      })
    }
    this.sendDataToService(country);
    
  }

  sendDataToService(country: any): void {
    this.countryTimezoneService.sendData(country);
  }

  countryDateAndTime() {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = this.utcOffset;
    const usa = utc + (3600000 * offset);
    const usaTimeNow = new Date(usa);
    this.hrs = usaTimeNow.getHours();
    this.ampm = this.hrs >= 12 ? 'pm' : 'am';
    this.hrs = this.hrs ? this.hrs : 12; 
  }
}

// const countryObject = {
//   "name": {
//     "common": "Cyprus",
//     "official": "Republic of Cyprus",
//     "nativeName": {
//       "ell": { "official": "Δημοκρατία της Κύπρος", "common": "Κύπρος" },
//       "tur": { "official": "Kıbrıs Cumhuriyeti", "common": "Kıbrıs" }
//     }
//   },
//   "tld": [".cy"],
//   "cca2": "CY",
//   "ccn3": "196",
//   "cca3": "CYP",
//   "cioc": "CYP",
//   "independent": true,
//   "status": "officially-assigned",
//   "unMember": true,
//   "currencies": { "EUR": { "name": "Euro", "symbol": "€" } },
//   "idd": { "root": "+3", "suffixes": ["57"] },
//   "capital": ["Nicosia"],
//   "altSpellings": [
//     "CY",
//     "Kýpros",
//     "Kıbrıs",
//     "Republic of Cyprus",
//     "Κυπριακή Δημοκρατία",
//     "Kıbrıs Cumhuriyeti"
//   ],
//   "region": "Europe",
//   "subregion": "Southern Europe",
//   "languages": { "ell": "Greek", "tur": "Turkish" },
//   "translations": {
//     "ara": { "official": "جمهورية قبرص", "common": "قبرص" },
//     "bre": { "official": "Republik Kiprenez", "common": "Kiprenez" },
//     "ces": { "official": "Kyperská republika", "common": "Kypr" },
//     // other translations...
//   },
//   "latlng": [35.0, 33.0],
//   "landlocked": false,
//   "area": 9251.0,
//   "demonyms": {
//     "eng": { "f": "Cypriot", "m": "Cypriot" },
//     "fra": { "f": "Chypriote", "m": "Chypriote" }
//   },
//   "flag": "\uD83C\uDDE8\uD83C\uDDFE",
//   "maps": {
//     "googleMaps": "https://goo.gl/maps/77hPBRdLid8yD5Bm7",
//     "openStreetMaps": "https://www.openstreetmap.org/relation/307787"
//   },
//   "population": 1207361,
//   "gini": { "2018": 32.7 },
//   "fifa": "CYP",
//   "car": { "signs": ["CY"], "side": "left" },
//   "timezones": ["UTC+02:00"],
//   "continents": ["Europe"],
//   "flags": {
//     "png": "https://flagcdn.com/w320/cy.png",
//     "svg": "https://flagcdn.com/cy.svg",
//     "alt": "The flag of Cyprus has a white field, at the center of which is a copper-colored silhouette of the Island of Cyprus above two green olive branches crossed at the stem."
//   },
//   "coatOfArms": {
//     "png": "https://mainfacts.com/media/images/coats_of_arms/cy.png",
//     "svg": "https://mainfacts.com/media/images/coats_of_arms/cy.svg"
//   },
//   "startOfWeek": "monday",
//   "capitalInfo": { "latlng": [35.17, 33.37] },
//   "postalCode": { "format": "####", "regex": "^(\\d{4})$" }
// };

