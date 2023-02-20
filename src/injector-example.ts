// class UsuarioService {
//     guardarUsuario() {
//         console.log('Guardando usuario...')
//     }
// }

// class Componente {
//     constructor(public usuarioService: UsuarioService) {

//     }
// }

// class Injector {
//     private _container = new Map();

//     constructor(providers: any[] = []) {
//         providers.forEach(service => this._container.set(service, new service()));
//     }

//     get(service: any) {
//         const serviceInstance = this._container.get(service);
//         if (!serviceInstance) {
//             throw Error('No provider found');
//         }

//         return serviceInstance;
//     }
// }

// //const injector = new Injector([]);
// const injector = new Injector([UsuarioService]);
// console.log(injector.get(UsuarioService))
// console.log(typeof UsuarioService)
// const component = new Componente(injector.get(UsuarioService));
// component.usuarioService.guardarUsuario(); 
