export class Country{
     countryName : string = '';
     countryCapital : string = '';
     countryArea : string = '';
     countryFlag : string = '';
     countryCode : string = '';
     countryRegion : string = '';
     countrySubRegion : string = '';
     countryMaps : string = '';
     countryTimezone : string = '';
     countryPopulation :number = 0;
     longitude : number = 0;
     latitude : number = 0
     
    constructor(countryName: string, countryCapital: string, countryArea: string, countryFlag: string, countryCode: string, countryRegion:string, countrySubRegion: string, countryMaps: string, CountryTimezone: string, countryPopulation: number, longitude: number, latitude: number){
        this.countryName = countryName;
        this.countryCapital = countryCapital;
        // countryLanguage = countryLanguage;
        this.countryArea = countryArea;
        this.countryFlag = countryFlag;
        this.countryCode = countryCode;
        // countryCurrency = countryCurrency;
        this.countryRegion = countryRegion;
        this.countrySubRegion =countrySubRegion;
        this.countryMaps = countryMaps;
        this.countryTimezone = CountryTimezone;
        this.countryPopulation = countryPopulation;
        this.longitude = longitude;
       this.latitude = latitude;
        
    }

}