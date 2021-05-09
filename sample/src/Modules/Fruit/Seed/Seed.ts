import { ILogService } from "../../../Contracts/ILogService";

let SeedId = 0;

export class Seed {
	private readonly _id = ++SeedId;

	constructor(private readonly _logService: ILogService) {
	}

	public init() {
		this._logService.log(`Seed ${this._id}`);
	}
}
