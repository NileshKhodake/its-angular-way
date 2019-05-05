import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
	flag: boolean = false;
	canActivate() : boolean {
		this.flag = !this.flag;
		return this.flag;
	}
}