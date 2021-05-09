import { TypeInfo } from "./TypeInfo";
import { FactoryPrefix } from "./Factory";

export class Container {
	private readonly _types: Map<number, TypeInfo> = new Map();
	private readonly _singletons: Map<number, object> = new Map();

	public register(id: number, type: object, ...dependencies: number[]) {
		this._registerType(id, type, dependencies);
	}

	public registerSingleton(id: number, type: object, ...dependencies: number[]) {
		this._registerType(id, type, dependencies, true);
	}

	public disposeSingleton(id: number) {
		if (!this._singletons.has(id)) {
			throw new Error("trying to dispose a singleton which doesn't exist");
		}

		this._singletons.delete(id);
	}

	public resolve(id: number): object | undefined {
		const type = this._types.get(id);

		if (!type) {
			throw new Error("unregistered type");
		}

		if (type.dependencies.length > 0) {
			return this._singleton(type, () => {
				const dependencies = type.dependencies.map(x => {
					if (x >= FactoryPrefix) {
						x = x - FactoryPrefix;
						return () => this.resolve(x);
					}

					return this.resolve(x);
				});

				// @ts-ignore
				return new (Function.prototype.bind.apply(type.type, [null, ...dependencies])); // eslint-disable-line
			});
		}

		// @ts-ignore
		return this._singleton(type, () => new type.type());
	}

	private _registerType(id: number, type: object, dependencies: number[], singleton = false) {
		this._types.set(id, {
			id,
			type,
			dependencies,
			singleton
		});
	}

	private _singleton(type: TypeInfo, callback: () => object) {
		if (type.singleton) {
			if (!this._singletons.has(type.id)) {
				this._singletons.set(type.id, callback());
			}

			return this._singletons.get(type.id);
		}

		return callback();
	}
}
