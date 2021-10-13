import {Injectable, NestMiddleware} from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import {TestService} from "./test.service";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

	constructor(
		private readonly testService: TestService
	) {}

	use(req: Request, res: Response, next: NextFunction) {
		this.testService.getHello();
		console.log(112)
		next();
	}
}