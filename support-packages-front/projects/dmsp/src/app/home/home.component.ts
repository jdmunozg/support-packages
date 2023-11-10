import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { DmspServices } from '../services/dmsp-services.service';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flipInX', [
      state(
        'active',
        style({
          transform: 'rotateX(360deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateX(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  selectedRole;
  selectedStage;
  selectedCategory;

  filterData = {
    role: null,
    stage: null,
    category: null,
  };
  filterDataIds = {
    role: null,
    stage: null,
    category: null,
  };

  SProles = [];
  roles: any = [];
  categories: any;
  stages: any;

  constructor(
    public dmspServices: DmspServices,
    private router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
  ) {
    this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.init();
      }
    });
  }

  ngOnInit() {}
  init() {
    this.spinner.show();
    this.getFilters();
  }

  getFilters() {
    Promise.all([
      this.dmspServices.getSPRoles().toPromise(),
    ])
      .then(([roles]) => {
        console.log(roles);
        
        this.roles = roles?.result?.roles;
        this.categories = roles?.result?.categories;
        this.stages = roles?.result?.stage;
        this.spinner.hide();
      })
      .catch((error) => this.spinner.hide());
  }

  parseName(role) {
    return role.name.split(' ').join('-').toLowerCase();
  }

  selectFilter(prop_: string, data: any) {
    this.filterData[prop_] = data;
    this.filterData = Object.assign({}, this.filterData);
    this.validateData();
  }

  validateData() {
    // console.log(this.filterDataIds, data, this.filterData)
    if (this.filterData.role && this.filterData.stage && this.filterData.category) {
      this.filterDataIds = {
        role: this.filterData.role.id,
        stage: this.filterData.stage.id,
        category: this.filterData.category.id,
      };
    }
  }

  /**
   *
   *
   */
  onrData(data: any) {
    this.filterData = data;
  }
}
