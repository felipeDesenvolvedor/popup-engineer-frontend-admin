// import imgPath from '../../img/img-2.jfif';

// Versões de estilização do popup
// export const config = {
//   overlay: {
//     width:'100vw',
//     height:'100vh',
//     backgroundColor: 'rgba(0,0,0, 0.5)',
//     position:'fixed',
//     top:0
//   },
//   popup: {
//     width:'80%',
//     height:'90%',
//     color:'green',
//     backgroundColor:'#fff',
//     position:'absolute',
//     left:'50%',
//     top:'50%',
//     transform:'translate(-50%, -50%)',
//     layerOne: {
//       width:'50%'
//     },
//     layerTwo:{
//       height:'100%',
//       width:'50%',
//       backgroundImage:`url(${imgPath})`,
//       backgroundSize:'cover',
//       backgroundRepeat:'no-repeat',
//       backgroundPosition:'center bottom'
//     },
//     elementsInformation:'layerOne'
//   }
// };

// export const config = {
//   overlay: {
//     width:'100vw',
//     height:'100vh',
//     backgroundColor: 'rgba(0,0,0, 0.5)',
//     position:'fixed',
//     top:0
//   },
//   popup: {
//     width:'80%',
//     height:'90%',
//     color:'green',
//     backgroundColor:'#fff',
//     position:'absolute',
//     left:'50%',
//     top:'50%',
//     transform:'translate(-50%, -50%)',
//     layerOne: {
//       width:'90%',
//       position:'absolute',
//       backgroundColor:'#fff',
//       transform:'translate(-50%, -50%)',
//       left:'50%',
//       top:'50%',
//       height:'90%'
//     },
//     layerTwo:{
//       // height:'100%',
//       // width:'50%',
//       backgroundImage:`url(${imgPath})`,
//       backgroundSize:'cover',
//       backgroundRepeat:'no-repeat',
//       backgroundPosition:'center bottom',
//       height: '100%',
//       width: '100%'
//     },
//     elementsInformation:'layerOne'
//   }
// };

export const config = {
  overlay: {
    width:'100vw',
    height:'100vh',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    position:'fixed',
    top:0
  },
  popup: {
    width:'80%',
    height:'90%',
    color:'green',
    backgroundColor:'#fff',
    position:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%, -50%)',
    layerOne: {
      width:'90%',
      position:'absolute',
      backgroundColor:'#fff',
      transform:'translate(-50%, -50%)',
      left:'50%',
      top:'50%',
      height:'90%'
    },
    layerTwo:{
      // height:'100%',
      // width:'50%',
      // backgroundImage:`url(${imgPath})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center bottom',
      height: '100%',
      width: '100%',
      backgroundColor:'transparent'
    },
    elementsInformation:'layerOne'
  }
};