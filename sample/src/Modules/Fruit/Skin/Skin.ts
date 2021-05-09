import { ILogService } from "../../../Contracts/ILogService";

export class Skin {
	constructor(private readonly _logService: ILogService) {
	}

	public init() {
		this._logService.log("Skin");
	}
}
