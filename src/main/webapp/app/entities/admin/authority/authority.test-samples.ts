import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e60dba5d-b95b-4caa-ab3d-39a3e94bf4af',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f1de8820-852c-432f-912b-89eeb064861f',
};

export const sampleWithFullData: IAuthority = {
  name: '43af2942-5c69-4359-90a7-200a32127051',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
