import { Models } from '../models/Models';

export class ControllersModels {

  buscarModels() {
    const model = new Models();
    return model.allModels;
  }
}