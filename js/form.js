function captura_datos(){
    let nombre_usuario = document.getElementById("name").value
    let apellidos_usuario = document.getElementById("lastname").value
    let tipo_documento = document.getElementById("documents")
    let texto_tipo_doc = tipo_documento.options[tipo_documento.selectedIndex].text
    let numero_doc = document.getElementById("num_doc").value
    console.log("Nombre ",nombre_usuario)
    console.log("Apellidos ", apellidos_usuario)
    console.log("texto ",tipo_documento)
    console.log("Tipo doc",texto_tipo_doc)
    console.log("Num doc",numero_doc)

    let genero_usuario = document.getElementsByName("gender") 
    for(i=0;i<genero_usuario.length;i++){
        let valor_genero_usuario = genero_usuario[i].value
        console.log("genero ",valor_genero_usuario)
    }
}


/* Shit + Alt + a */
/*Obtener los datos del formulario*/
