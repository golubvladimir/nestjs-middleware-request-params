import {Inject, Injectable, Scope} from "@nestjs/common";
import {REQUEST} from "@nestjs/core";
import {Request} from "express";

@Injectable({ scope: Scope.REQUEST })
export class TestService {
	constructor(
		@Inject(REQUEST) private request: Request
	) {}

	getHello() {
		console.log(this.request.params);
		console.log(this.request.path);
	}
}