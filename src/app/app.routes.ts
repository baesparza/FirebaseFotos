import { Routes, RouterModule } from '@angular/router';

import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const ROUTES: Routes = [
    { path: '**', redirectTo: 'fotos' },
    { path: 'fotos', component: FotosComponent },
    { path: 'carga', component: CargaComponent },
];

export const ROUTER = RouterModule.forRoot(ROUTES);