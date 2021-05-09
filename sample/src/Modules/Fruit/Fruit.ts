import { ILogService } from "../../Contracts/ILogService";
import { Skin } from "./Skin/Skin";
import { Seed } from "./Seed/Seed";

export class Fruit {
	constructor(
		private readonly _logService: ILogService,
		private readonly _skin: Skin,
		private readonly _seedFactory: () => Seed) {
	}

	public init() {
		this._logService.log("Fruit");
		this._skin.init();

		for (let i = 0; i < 3; i++) {
			const seed = this._seedFactory();
			seed.init();
		}
	}
}
