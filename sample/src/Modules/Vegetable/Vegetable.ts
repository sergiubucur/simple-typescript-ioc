import { ILogService } from "../../Contracts/ILogService";

export class Vegetable {
	constructor(private readonly _logService: ILogService) {
	}

	public init() {
		this._logService.log("Vegetable");
	}
}
