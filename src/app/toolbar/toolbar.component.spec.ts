import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ToolbarComponent } from "./toolbar.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ToolbarComponent", () => {

  let fixture: ComponentFixture<ToolbarComponent>;
  let component: ToolbarComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ToolbarComponent]
    });

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
