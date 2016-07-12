import { Component } from '@angular/core';
import {TestMaterialComponent} from './test-material/test-material.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TestMaterialComponent]
})
export class AppComponent {
  title = 'app works!';
}
