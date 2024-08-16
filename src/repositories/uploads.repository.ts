import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Uploads, UploadsRelations} from '../models';

export class UploadsRepository extends DefaultCrudRepository<
  Uploads,
  typeof Uploads.prototype.id,
  UploadsRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Uploads, dataSource);
  }
}
