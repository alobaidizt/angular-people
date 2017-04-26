

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Person} from "../models/person";

@Injectable()
export class PersonService {

    private peopleUrl = 'api/people';  // URL to web api

    constructor(private http: Http) { }

    getPeople(): Promise<Person[]> {
        return this.http.get(this.peopleUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getPerson(id: string) {
        return this.http.get(this.peopleUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(person: Person): Promise<Person>  {
        if (person._id) {
            return this.put(person);
        }
        return this.post(person);
    }

    private post(person: Person): Promise<Person> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.peopleUrl, JSON.stringify(person), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(person: Person) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.peopleUrl}/${person._id}`;

        return this.http
            .put(url, JSON.stringify(person), {headers: headers})
            .toPromise()
            .then(() => person)
            .catch(this.handleError);
    }

    delete(person: Person) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.peopleUrl}/${person._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);

        return Promise.reject(error.message || error);
    }
}
