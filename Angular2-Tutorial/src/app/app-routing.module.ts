import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { OverviewComponent } from './wijmo5-Info/overview/overview.component';
import { ReferencingComponent } from './wijmo5-Info/referencing/referencing.component';
import { Ng1DirectiveComponent } from './wijmo5-Info/ng1-directive/ng1-directive.component';
import { SizingStyleComponent } from './wijmo5-Info/sizing-style/sizing-style.component';
import { PsesudoComponent } from './wijmo5-Info/psesudo/psesudo.component';
import { EventsComponent } from './wijmo5-Info/events/events.component';
import { EnumerationsComponent } from './wijmo5-Info/enumerations/enumerations.component';
import { GlobalizationComponent } from './wijmo5-Info/globalization/globalization.component';
import { GlyphsComponent } from './wijmo5-Info/glyphs/glyphs.component';
import { IntellisenseComponent } from './wijmo5-Info/intellisense/intellisense.component';
import { LesscssComponent } from './wijmo5-Info/lesscss/lesscss.component';

import { FilterComponent } from './flexgrid/filter/filter.component';



const APP_ROUTES:Routes = [
    { path: '', component: OverviewComponent },  
    { path: 'referencing', component: ReferencingComponent },  
    { path: 'ng1-directive', component: Ng1DirectiveComponent },
    { path: 'sizing-style', component: SizingStyleComponent },
    { path: 'psesudo', component: PsesudoComponent },    
    { path: 'events', component: EventsComponent },    
    { path: 'enumerations', component: EnumerationsComponent },    
    { path: 'globalization', component: GlobalizationComponent },    
    { path: 'glyphs', component: GlyphsComponent },
    { path: 'intellisense', component: IntellisenseComponent },    
    { path: 'lesscss', component: LesscssComponent },    

    { path: 'flexgrid-filter', component: FilterComponent },
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}