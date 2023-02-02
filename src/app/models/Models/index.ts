import { IModel } from '../../interfaces/IModel';

const config = [
  {
    popupName: 'modelo 1', 
    popupId:'1',
    imgPreview:'path'
  },
  {
    popupName: 'modelo 2', 
    popupId:'2',
    imgPreview:'path'
  },
  {
    popupName: 'modelo 3', 
    popupId:'3',
    imgPreview:'path'
  },
  {
    popupName: 'modelo 4', 
    popupId:'4',
    imgPreview:'path'
  },
  {
    popupName: 'modelo 5', 
    popupId:'5',
    imgPreview:'path'
  }
];

export class Models {
  private models:Array<IModel> = [];  
  constructor() {
    this.models = this.findModels(config);
  }
  
  private findModels(modelsParameter:Array<IModel>) {
    return this.models.concat(modelsParameter);
  }
  
  get allModels():Array<IModel> {
    return this.models;
  }
}