

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Person} from "../../models/person";
import {PersonService} from "../../services/person.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    people: Person[] = [];

    constructor(
        private router: Router,
        private personService: PersonService) {
    }

    ngOnInit() {
        this.personService.getPeople()
            .then(people => this.people = people);
    }

    gotoDetail(person: Person) {
        let link = ['/detail', person._id];
        this.router.navigate(link);
    }
}
