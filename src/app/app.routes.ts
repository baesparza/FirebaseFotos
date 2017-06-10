import { Routes, RouterModule } from '@angular/router';

import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const ROUTES: Routes = [
    { path: 'fotos', component: FotosComponent },
    { path: 'carga', component: CargaComponent },
    { path: '**', redirectTo: 'fotos' }
];

export const ROUTER = RouterModule.forRoot(ROUTES);