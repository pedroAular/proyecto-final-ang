import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { Router } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"
import { AuthService } from "./auht.service"
import { users } from "../dashboard/pages/users/models"
import { RouterMock } from "../core/router.mock"
import {MockProvider} from 'ng-mocks';
describe('AuthService', () =>{
    let service:AuthService;
    let httpController:HttpTestingController

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, RouterTestingModule],
            providers:[
            MockProvider(Router)
            ]
        });
        service = TestBed.inject(AuthService)
        httpController = TestBed.inject(HttpTestingController)
    });
    afterEach(()=>{
        httpController.verify();
    });
    it ('si login es valido el observable authUser$ debe emitir un valor',(done) =>{
        const mockUsers: users = {
            "name": "jose",
            "surname": "aular",
            "email": "jose@g.com",
            "password": "1!qQwe32",
            "token": "5yeOVCVNCVB7ESdT6lXa",
            "id": 1
        };

        const mockResponse: users[] = [mockUsers];

        service.login({
            email: mockUsers.email,
            password: mockUsers.password
        });

        httpController.expectOne({
            method: 'GET',
            url: `http://localhost:3000/users?email=${mockUsers.email}&password=${mockUsers.password}`
        }).flush(mockResponse);
        service.authUsers$.subscribe({
            next:(authUsers)=>{
                expect(authUsers).toBeTruthy();
                expect(authUsers).toEqual(mockUsers)
                done()
            }
        })
    });
});


