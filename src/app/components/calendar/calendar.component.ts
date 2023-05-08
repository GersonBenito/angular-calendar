import { Component, OnInit } from '@angular/core';
import * as calendarRaw from '../../../data/calendar.json';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  public days: any = []; //TODO: revisar interfaces
  public hours: any = []; // revisar

  // public dayTS: string = '';
  // public hour: string = '';

  ngOnInit(): void {
    this.getShedule();
  }

  getShedule(): void {
    const { days, hours }: any = ( calendarRaw as any);
    this.days = days;
    this.hours = hours
  }

  getData(day: { day: string, selected: boolean }, hour: { hour: string, selected: boolean }): void{ // TODO: revisar interfaces
    // this.dayTS = day;
    console.log('init -->',this.days);
    console.log('init -->',this.hours);

    this.days = this.days.map((item: any) => ({...item, selected: item.selected ? true : (item.day === day.day) ? true : false }))

    this.hours = this.hours.map((item: any) => ({...item, selected: item.selected ? true : (item.hour === hour.hour) ? true : false }));

    console.log('final -->',this.days);
    console.log('final -->',this.hours);

  }
}
