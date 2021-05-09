export declare class Container {
    private readonly _types;
    private readonly _singletons;
    register(id: number, type: object, ...dependencies: number[]): void;
    registerSingleton(id: number, type: object, ...dependencies: number[]): void;
    disposeSingleton(id: number): void;
    resolve(id: number): object | undefined;
    private _registerType;
    private _singleton;
}
