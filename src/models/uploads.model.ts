import {Entity, model, property} from '@loopback/repository';

@model()
export class Uploads extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
  })
  label?: string;

  @property({
    type: 'string',
  })
  filename?: string;


  constructor(data?: Partial<Uploads>) {
    super(data);
  }
}

export interface UploadsRelations {
  // describe navigational properties here
}

export type UploadsWithRelations = Uploads & UploadsRelations;
