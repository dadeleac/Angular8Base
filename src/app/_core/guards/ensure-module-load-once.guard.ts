export class EnsureModuleLoadOnceGuard{

    //Control para que CoreModule solo pueda ser cargado por AppModule
    constructor(targetModule: any){
        if (targetModule){
            throw new Error(`${targetModule.constructor.name} ya ha sido cargado. Solo puede cargar este modulo en AppModule`);
        }
    }
}