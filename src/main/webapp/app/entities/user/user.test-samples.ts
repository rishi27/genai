import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 21161,
  login: '1L6',
};

export const sampleWithPartialData: IUser = {
  id: 17714,
  login: 'ra',
};

export const sampleWithFullData: IUser = {
  id: 15977,
  login: 'oZrx@',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
