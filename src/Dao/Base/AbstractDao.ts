import { CRUDInterface } from "./CRUDInterface";
import { Repository, ObjectType, getManager } from "typeorm";
import { injectable, unmanaged } from "inversify";

@injectable()
export abstract class AbstractDao<T> implements CRUDInterface<T> {
    protected repo: Repository<T>;
    constructor(@unmanaged() objectType: ObjectType<T>) {
        this.repo = getManager().getRepository(objectType);
    }
    abstract insert(object: T): Promise<T>;
    abstract select(objectIdx: number): Promise<T>;
    abstract update(object: T): Promise<T>;
    abstract delete(object: T): Promise<void>;
}