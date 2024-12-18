
        function procesarEncuesta() {
            let respuestaProgramar = document.querySelector('input[name="programar"]:checked');
            let respuestaJavascript = document.querySelector('input[name="javascript"]:checked');

            //la parte donde se convierte el Si Y el No de la encuesta en number y boolean
            //respuestaProgramar && respuestaJavascript dentro del if sirve para verificar que el usuario ha respondido ambas preguntas de la encuesta antes de procesar los resultados. 
            if (respuestaProgramar && respuestaJavascript) {
                let leGustaProgramar = Boolean(Number(respuestaProgramar.value));
                let haUsadoJavascript = Boolean(Number(respuestaJavascript.value));

                window.alert(`Resultado: \n Le gusta programar : ${leGustaProgramar}\n ha usado Javascript : ${haUsadoJavascript}`)                
                
            } else {
                alert("Por favor, responde todas las preguntas.");
            }
        }
        