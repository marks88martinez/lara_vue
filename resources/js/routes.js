import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// function verificarAcceso(to, from, next) {
//     let authUser = JSON.parse(sessionStorage.getItem('authUser'));
//     if (authUser) {
//         let listRolPermisosByUsuario = JSON.parse(sessionStorage.getItem('listRolPermisosByUsuario'));
//         if (listRolPermisosByUsuario.includes(to.name)) {
//             next();
//         } else {
//             let listRolPermisosByUsuarioFilter = [];
//             listRolPermisosByUsuario.map(function(x) {
//                 if (x.includes('index')) {
//                     listRolPermisosByUsuarioFilter.push(x);
//                 }
//             })
//             if (to.name == 'dashboard.index') {
//                 next({ name: listRolPermisosByUsuarioFilter[0] });
//             } else {
//                 next(from.path)
//             }
//         }
//     } else {
//         next('/login')
//     }
// }

export const rutas = [
    {
        path: '/servicios',
        name: 'Servicios',
        component: require('./components/Servicios').default,
    },
    {
        path: '/',
        name: 'Home',
        component: require('./components/Home').default,
    },
    {
        path: '*',
        component: require('./components/plantilla/404').default
    }
]

export default new Router({
    routes: rutas,
    mode: 'history',
    linkActiveClass: 'active'
})
