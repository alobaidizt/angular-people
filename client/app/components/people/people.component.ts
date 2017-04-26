
import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";
import { Router } from '@angular/router';

@Component({
    selector: 'my-people',
    templateUrl: './app/components/people/people.component.html',
    styleUrls: ['./app/components/people/people.component.css']
})

export class PeopleComponent implements OnInit {

    people: Person[];
    selectedPerson: Person;
    error: any;

    constructor(
        private router: Router,
        private personService: PersonService) { }
    getPeople() {
        this.personService.getPeople().then(people => this.people = people);
    }
    ngOnInit() {
        this.getPeople();
    }
    onSelect(person: Person) { this.selectedPerson = person; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedPerson._id]);
    }

    addPerson() {
        this.selectedPerson = null;
        this.router.navigate(['/detail', 'new']);
    }

    deletePerson(person: Person, event: any) {
        event.stopPropagation();
        this.personService
            .delete(person)
            .then(res => {
                this.people = this.people.filter(p => p !== person);
                if (this.selectedPerson === person) { this.selectedPerson = null; }
            })
            .catch(error => this.error = error);
    }
}
