import { TestBed } from "@angular/core/testing";

import { HttpConfigInterceptor } from "./http-config-interceptor.service";

describe("TokenInterceptorService", () => {
    let service: HttpConfigInterceptor;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HttpConfigInterceptor);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
