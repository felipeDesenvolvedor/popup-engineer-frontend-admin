import { ILayerConfig } from "./ILayerConfig"

export interface IPopUp {
    width:string,
    height:string,
    color:string,
    backgroundColor:string,
    position:string,
    left:string,
    top:string,
    transform:string,
    layerOne:ILayerConfig,
    layerTwo:ILayerConfig,
    elementsInformation:string
}