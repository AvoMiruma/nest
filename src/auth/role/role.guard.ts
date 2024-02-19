import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor (private readonly reflector: Reflector) {}

    private matchRoles(roles: string[], userRole: string) {
        return roles.some((role) => role === userRole);
    }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if(!roles) {
            return true;
        }

        const {user} = context.switchToHttp().getRequest();
        return this.matchRoles(roles, user.role)
    }
}