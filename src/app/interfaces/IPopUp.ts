interface ILayerConfig {
    width?:string,
    height?:string
    position?:string,
    backgroundImage?:string,
    backgroundColor?:string,
    backgroundSize?:string,
    backgroundRepeat?:string,
    backgroundPosition?:string
    transform?:string,
    left?:string,
    top?:string,
}

export interface IPopUp {
    width:string,
    height:string,
    color:string,
    backgroundColor:string,
    position:string,
    left:string,
    top:string,
    transform:string,
    layerOne:ILayerConfig
    layerTwo:ILayerConfig
    elementsInformation:string
}