import { user } from '../../shared/models/user.interface';

export class RoleValidator {
    isSuscriptor(user: user): boolean {
        return user.role == 'SUSCRIPTOR';
    }
    isEditor(user: user): boolean {
        return user.role == 'EDITOR';
    }
    isAdmin(user: user): boolean {
        return user.role == 'ADMIN';
    }
}