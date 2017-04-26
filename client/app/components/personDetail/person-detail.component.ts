

import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../models/person";
import { ActivatedRoute, Params } from '@angular/router';
import {PersonService} from "../../services/person.service";

@Component({
    selector: 'my-person-detail',
    templateUrl: './app/components/personDetail/person-detail.component.html'
})

export class PersonDetailComponent implements OnInit {
    @Input() person: Person;
    newPerson = false;
    error: any;
    navigated = false; // true if navigated here
 active = true;

    constructor(
        private personService: PersonService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newPerson = true;
                this.person = new Person();
            } else {
                this.newPerson = false;
                this.personService.getPerson(id)
                    .then(person => this.person = person);
            }
        });
    }

    save() {
        this.personService
            .save(this.person)
            .then(person => {
                this.person = person; // saved person, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
    submitted = false;
      onSubmit() {
        this.submitted = true;
      }

    goBack() {
        window.history.back();
    }
}
