window.cipher = {
  cifrar : (offSet, textoUs) =>{
    let resultado = "";
    offSet = parseInt(offSet);

      for (let i = 0; i < textoUs.length; i++) {
        let codigoAscii = textoUs.charCodeAt(i);
        if (codigoAscii >= 65 && codigoAscii <=90){
          let formula = (codigoAscii - 65 + offSet) % 26 + 65;
          let nuevoCodigoAscii = (String.fromCharCode(formula));
          resultado = resultado + nuevoCodigoAscii;
        }  else if (codigoAscii >=97 && codigoAscii <=122){
          let formula = (codigoAscii - 97 + offSet) % 26 + 97;
          let nuevoCodigoAscii = (String.fromCharCode (formula));
          resultado = resultado + nuevoCodigoAscii;
        } else {
          resultado = resultado + textoUs[i];
        }

        }
      return resultado;
    },

  decifrar : (offSet, textoUs) =>{
    let resultado = "";
    offSet = parseInt(offSet);
      for (let i = 0; i < textoUs.length; i++) {
        let codigoAscii = textoUs.charCodeAt(i);
        if (codigoAscii >= 65 && codigoAscii <=90){
          let formula = (codigoAscii - 65 - offSet + 52) % 26 + 65;
          let nuevoCodigoAscii = (String.fromCharCode(formula));
          resultado = resultado + nuevoCodigoAscii;
        } else if (codigoAscii >=97 && codigoAscii <=122){
          let formula = (codigoAscii - 97 - offSet + 52) % 26 + 97;
          let nuevoCodigoAscii = (String.fromCharCode(formula));
          resultado = resultado + nuevoCodigoAscii;
        } else{
          resultado = resultado + textoUs [i];
        }

        }
     return resultado;
    }
  };
