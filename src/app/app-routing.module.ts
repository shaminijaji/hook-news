import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnhancedSearchComponent } from './enhanced-search/enhanced-search.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: '',  component: EnhancedSearchComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
