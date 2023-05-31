import { TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

describe("UserComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    });
  });
  it("should create the user", () => {
    const fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
  it("should use the user name from the service", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(component.user.name);
  });
  it("should display the user name if user is logged in", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    component.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(
      component.user.name
    );
  });
  it("should display the user name if user is not logged in", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).not.toContain(
      component.user.name
    );
  });
  it("shouldn't fetch data successfully if not called asynchronously", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, "getDetails").and.returnValue(
      Promise.resolve("Data")
    );
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });
  it("shouldn't fetch data successfully if called asynchronously", async(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, "getDetails").and.returnValue(
      Promise.resolve("Data")
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe("Data");
    });
  }));
  it("shouldn't fetch data successfully if called fake asynchronously", fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, "getDetails").and.returnValue(
      Promise.resolve("Data")
    );
    fixture.detectChanges();
    tick();
    expect(app.data).toBe("Data");
  }));
});undefined
