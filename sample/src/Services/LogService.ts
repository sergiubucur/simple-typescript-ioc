import { ILogService } from "../Contracts/ILogService";

export class LogService implements ILogService {
	constructor() {
		console.log("LogService constructor");
	}

	log(message: string) {
		console.log(message);
	}
}
