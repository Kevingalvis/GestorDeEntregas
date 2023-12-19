/** estas dos variables tiene el boton de mostrar y contenedor de la tabla donde se ven los datos */
const $mostrarData = document.getElementById('btnMostrar');
const $dataView = document.getElementById('data-view');
/**variable que tiene el contenedor info para insertar el html de los datos del admin*/
const $info = document.getElementById('info');
/** variables donde guardamos la fecha */
const $fecha = new Date();
const $contFecha = document.getElementById('fecha');
const $infoDia = document.getElementById('info-fecha');
/** variable para activar el evento change del select */
const $select = document.getElementById('AdminClient');
/** variable donde obtenemos el array de todos los inputs  datauser */
const $dataUser = document.querySelectorAll('#datauser input');
/** variable boton visualizar y boton cerrar */
const $modaCont = document.getElementById('view-modal');
const $modaCerrar = document.getElementById('moda-cerrar');
/** boton para imprimir */
const $printer = document.getElementById('btnPrinter');
const $contPrinter = document.getElementById('cont-printer');
/** variables para los buscadores o los inputs filter */
const $filter = document.querySelectorAll('#filter input');
console.log($filter);

/** Array Admin con todos los datos que se guardan */
const $dataAdmin = [{
        fechaEntrega: new Date().toLocaleDateString({day:"numeric",month:"long",year:"numeric"}),
        nameAdmin: "kevin David Zambrano", 
        cedula: "1011229409",
        nameClient: "Son Goku",
        tel: "3015304944",
        email:"SonGoku@dragon.com",
        tipo:"portatil",
        marca:"lenovo",
        descripcion: "32GB/464s464",
        serial:"XDFERTH"

},
{
    fechaEntrega: new Date().toLocaleDateString({day:"numeric",month:"long",year:"numeric"}),
    nameAdmin: "Eulises Aurerio", 
    cedula: "111111111",
    nameClient: "leonidas",
    tel: "30151502",
    email:"esparta@gmail.com",
    tipo:"portatil",
    marca:"lenovo",
    descripcion: "32GB/464s464",
    serial:"XDFERTH"

},
{
    fechaEntrega: new Date().toLocaleDateString({day:"numeric",month:"long",year:"numeric"}),
    nameAdmin: "prueba dato 3", 
    cedula: "111111111",
    nameClient: "cliente de prueba",
    tel: "3000000000",
    email:"prueba@gmail.com",
    tipo:"portatil",
    marca:"lenovo",
    descripcion: "32GB/464s464",
    serial:"XDFERTH"

}
];
/** array que tiene los datos de los admin predeterminados */
const objAdmin = [
        {
            name:"Kevin David Zambrano Galvis",
            cargo:"Lider Invetario TI",
            tel: 3015304944,
            Email: "kevindavid@itil.com"

        },  
        {
            name:"Erick Fabian Cano",
            cargo:"Auxiliar Inventario TI",
            tel: 3015304944,
            Email: "ErickCano@itil.com"

        },  
        {
            name:"Esteban Andres Camacho",
            cargo:"Analist Inventario TI",
            tel: 3015304944,
            Email: "Camacho@itil.com"

        }  
]
/**cargamos la fecha */
const $h3 = document.createElement('h3');
$h3.classList.add('fecha-dia');
$h3.textContent = `${$fecha.getDate()}`
$contFecha.prepend($h3);

const $h2 = document.createElement('h2');
$h2.classList.add('fecha-mes');
$h2.textContent = `${$fecha.toLocaleDateString('default',{month:"long"})}`;
$infoDia.prepend($h2);


 const $h2Year = document.createElement('h2');
$h2Year.classList.add('fecha-anio');
$h2Year.textContent = `${$fecha.getFullYear()}`;
$infoDia.appendChild($h2Year); 



/********************************************************************** */
/**
 * Creamos el evento change para cuando selecione el admin se vea los datos
 */
$select.addEventListener('change',(e) =>{
    $info.innerHTML = `
        <h3>${objAdmin[e.target.value].name}</h3>
        <h3>${objAdmin[e.target.value].cargo}</h3>
        <h3>${objAdmin[e.target.value].tel}</h3>
        <h3>${objAdmin[e.target.value].Email}</h3>
    
    `
});

/** creamos el filter para las tabla o el buscador */
$filter.forEach((elemtFilter) =>{
    elemtFilter.addEventListener('keyup', (e) =>{
        document.querySelectorAll(".dataFilter").forEach( dataFilter =>{
            dataFilter.textContent.includes(e.target.value)?dataFilter.classList.remove("filtro"):dataFilter.classList.add("filtro");
        });
        console.log(e.target.value);
    });
});





/** esto solamente funciona para mostrar y ocultar la tabla */
$mostrarData.addEventListener('click',() =>{
    $dataView.classList.toggle('data-disabled');
});

/** este evento cierra el modal de editar o el de visualizar */
$modaCerrar.addEventListener('click',() =>{
    document.getElementById('editAdminActivos').setAttribute("disabled","");
    document.getElementById('editFecha').setAttribute("disabled","");
    document.getElementById('editClient').setAttribute("disabled","");
    document.getElementById('editCedula').setAttribute("disabled","");
    document.getElementById('editTel').setAttribute("disabled","");
    document.getElementById('editEmail').setAttribute("disabled","");
    document.getElementById('editTipo').setAttribute("disabled","");
    document.getElementById('editSerial').setAttribute("disabled","");
    document.getElementById('editText').setAttribute("disabled",""); 

    document.getElementById('btnGuardarEdit').classList.remove('habilitar');
    document.getElementById('btnCancelarEdit').classList.remove('habilitar');
    document.getElementById('btnEdit').classList.remove('guardar');
    document.getElementById('btnPrinter').classList.remove('guardar');

    $modaCont.classList.add('view_disable');
});


/**
 * funcion donde guardamos los datos de registro de los activos y quien los entrega
 * a quien los recibe
 */
const guardarDatos = () =>{
    /** variable donde obtenemos el valor de los select */
    const $select = document.getElementById('AdminClient').value;
    /** variables de los inputs User y Activos */
    const $cedula = document.getElementById('cedula').value;
    const $nameClient = document.getElementById('nombre').value;
    const $tel = document.getElementById('tel').value;
    const $email = document.getElementById('email').value;
    /** variables de activos */
    const $tipo = document.getElementById('select-activos').value;
    const $aSerial = document.getElementById('a-serial').value;
    const $aMarca = document.getElementById('a-marca').value;
    const $aText = document.getElementById('text-area').value;
  

   

    /** validamos si los campos tiene informacion */
    if(!$cedula){
        document.getElementById('cedula').classList.add('error-input');
        document.getElementById('label-cedula').classList.add('error-label');
        return alert("Faltan Numero De Cedula");
    }else if(!$nameClient){
        document.getElementById('nombre').classList.add('error-input');
        document.getElementById('label-nombre').classList.add('error-label');
        return alert("Falta Nombre Cliente");
    }else if(!$tel){
        document.getElementById('tel').classList.add('error-input');
        document.getElementById('label-tel').classList.add('error-label');
        return alert("Faltan Telefono");
    }else if(!$email){
        document.getElementById('email').classList.add('error-input');
        document.getElementById('label-email').classList.add('error-label');
        return alert("Faltan Email");
    }else if(!$aSerial){
        document.getElementById('l-serial').classList.add('error-Alabel');
        document.getElementById('a-serial').classList.add('error-Ainput');
        return alert("Faltan Activo serial");
    }else if(!$aMarca){
        document.getElementById('l-marca').classList.add('error-Alabel');
        document.getElementById('a-marca').classList.add('error-Ainput');
        return alert("Faltan Activo Marca");
    }
    
    
    else{

        document.getElementById('cedula').classList.remove('error-input');
        document.getElementById('label-cedula').classList.remove('error-label');
        document.getElementById('nombre').classList.remove('error-input');
        document.getElementById('label-nombre').classList.remove('error-label');
        document.getElementById('tel').classList.remove('error-input');
        document.getElementById('label-tel').classList.remove('error-label');
        document.getElementById('email').classList.remove('error-input');
        document.getElementById('label-email').classList.remove('error-label');
        document.getElementById('l-serial').classList.remove('error-Alabel');
        document.getElementById('a-serial').classList.remove('error-Ainput');
        document.getElementById('l-marca').classList.remove('error-Alabel');
        document.getElementById('a-marca').classList.remove('error-Ainput');

    };  

    alert("Se acaba de agregar un nuevo dato");

    /** objecto que obtiene todos los valores a guardar */
    const $baseDatos = {
        fechaEntrega: new Date().toLocaleDateString({day:"numeric",month:"long",year:"numeric"}),
        nameAdmin: objAdmin[$select].name, 
        cedula: $cedula,
        nameClient: $nameClient,
        tel: $tel,
        email:$email,
        tipo:$tipo,
        marca:$aMarca,
        descripcion: $aText,
        serial:$aSerial

    }
    
    
    /** mostramos los datos que se envian a la funcion mostrar
     * limpiamos el html para que no se dupliquen
     */
    $dataAdmin.push($baseDatos);
    limpiarInputs();
    mostrarDatosView($dataAdmin);
    
}

/**funcion para mostrar los datos guardados en el contenedor View */
const mostrarDatosView = ($dataAdmin) => {
    const $contTitleView = document.getElementById('tbody');
    limpiarHtml($contTitleView);
    $dataAdmin.forEach((activo, index) => {
    
    /**creamos el DOM para insertarlo desde javascript al HTML en la tabla*/
    const $tr = document.createElement("tr");
    $tr.setAttribute("class","dataFilter");
    $tr.innerHTML = `
        <td >${activo.fechaEntrega}</td>
        <td >${activo.nameAdmin}</td>
        <td >${activo.cedula}</td>
        <td >${activo.nameClient}</td>
        <td >${activo.tel}</td>
        <td >${activo.email}</td>
        <td >${activo.tipo}</td>
        <td >${activo.marca}</td>
        <td >${activo.serial}</td>
        <button class="btn-view" onclick="modalOpen(${index})"><i class="fa-solid fa-eye"></i></button>
        <button class="btn-printer" onclick="eliminarDato(${index})"><i class="fa-solid fa-trash"></i></button>
        
    `
    /** insertamos el hijo al html */
    $contTitleView.appendChild($tr); 

   
    });

    /** un evento para ejecutar un modal y asi poder enviarlo a imprimir o guardar con los estilos
     * dependiendo si guarda o imprime se recarga la pagina para cerrar la ventana y no se quede pegado
     */

    $printer.addEventListener('click',() =>{
        let printer = window.confirm("Guardar Acta de entrega");
        
       
        if(printer   === true){
            $contPrinter.classList.toggle('disabled-printer');
            window.print();
            window.location.reload()
        }

    });

    
}

const eliminarDato = (indexDelete) =>{
    delete($dataAdmin[indexDelete]);
    console.log($dataAdmin)
    alert("Esta apunto de eliminar el siguiente dato");
    let deleteData = window.confirm("Se eliminara los siguientes datos esta seguro");
    if (deleteData = true) return  mostrarDatosView($dataAdmin);
}

/**aqui obtenemos los datos para que se visualice el modal y tambien para modificarlos al darle en el boton de editar*/

const modalOpen = (index) =>{
    $modaCont.classList.remove('view_disable');

    document.getElementById('editAdminActivos').value = $dataAdmin[index].nameAdmin;
    document.getElementById('editFecha').value = $dataAdmin[index].fechaEntrega;
    document.getElementById('editClient').value = $dataAdmin[index].nameClient;
    document.getElementById('editCedula').value = $dataAdmin[index].cedula;
    document.getElementById('editTel').value = $dataAdmin[index].tel;
    document.getElementById('editEmail').value = $dataAdmin[index].email;
    document.getElementById('editTipo').value = $dataAdmin[index].tipo;
    document.getElementById('editSerial').value = $dataAdmin[index].serial;
    document.getElementById('editText').innerText = $dataAdmin[index].descripcion;

     /** datos cargador para la impresion */
     document.getElementById('printerDate').innerHTML = $dataAdmin[index].fechaEntrega;
     document.getElementById('printerAdmin').innerHTML = $dataAdmin[index].nameAdmin;
     document.getElementById('printerClient').innerHTML = $dataAdmin[index].nameClient;
     document.getElementById('printerTipo').innerHTML = $dataAdmin[index].tipo;
     document.getElementById('printerMarca').innerHTML = $dataAdmin[index].marca;
     document.getElementById('printerSerial').innerHTML = $dataAdmin[index].serial;




    let $btnGuardarEdit = document.getElementById('btnGuardarEdit');

    $btnGuardarEdit.addEventListener('click', () =>{
        let EditAdmin = document.getElementById('editAdminActivos').value
       
        let EditFecha = document.getElementById('editFecha').value;
        let EditClient = document.getElementById('editClient').value;
        let EditCedula = document.getElementById('editCedula').value;
        let EditTel = document.getElementById('editTel').value;
        let EditEmail = document.getElementById('editEmail').value;
        let EditTipo = document.getElementById('editTipo').value;
        let EditSerial = document.getElementById('editSerial').value;
        let EditText = document.getElementById('editText').value;

        EditAdmin.value = EditAdmin;
        
        $dataAdmin[index].nameAdmin = EditAdmin;
        $dataAdmin[index].fechaEntrega = EditFecha;
        $dataAdmin[index].nameClient = EditClient;
        $dataAdmin[index].cedula = EditCedula;
        $dataAdmin[index].tel = EditTel;
        $dataAdmin[index].email = EditEmail;
        $dataAdmin[index].tipo = EditTipo;
        $dataAdmin[index].serial = EditSerial;
        $dataAdmin[index].descripcion = EditText;
        
        alert("Se a actualizado los datos");
        mostrarDatosView($dataAdmin);
        index = null;

        document.getElementById('editAdminActivos').setAttribute("disabled","");
        document.getElementById('editFecha').setAttribute("disabled","");
        document.getElementById('editClient').setAttribute("disabled","");
        document.getElementById('editCedula').setAttribute("disabled","");
        document.getElementById('editTel').setAttribute("disabled","");
        document.getElementById('editEmail').setAttribute("disabled","");
        document.getElementById('editTipo').setAttribute("disabled","");
        document.getElementById('editSerial').setAttribute("disabled","");
        document.getElementById('editText').setAttribute("disabled",""); 

        document.getElementById('btnGuardarEdit').classList.remove('habilitar');
        document.getElementById('btnCancelarEdit').classList.remove('habilitar');
        document.getElementById('btnEdit').classList.remove('guardar');
        document.getElementById('btnPrinter').classList.remove('guardar');

        $modaCont.classList.add('view_disable');



    
    });

   
}
/** funcion para cancelar el edit */
const cancelarEdit = () => {
    alert("No hubo ninguna modificacion");
    
    document.getElementById('editAdminActivos').setAttribute("disabled","");
    document.getElementById('editFecha').setAttribute("disabled","");
    document.getElementById('editClient').setAttribute("disabled","");
    document.getElementById('editCedula').setAttribute("disabled","");
    document.getElementById('editTel').setAttribute("disabled","");
    document.getElementById('editEmail').setAttribute("disabled","");
    document.getElementById('editTipo').setAttribute("disabled","");
    document.getElementById('editSerial').setAttribute("disabled","");
    document.getElementById('editText').setAttribute("disabled",""); 

    document.getElementById('btnGuardarEdit').classList.remove('habilitar');
    document.getElementById('btnCancelarEdit').classList.remove('habilitar');
    document.getElementById('btnEdit').classList.remove('guardar');
    document.getElementById('btnPrinter').classList.remove('guardar');

    $modaCont.classList.add('view_disable');
}

/** funcion para poder habilitar los campos y editar */
const editarDatos = () =>{
    alert("esta apunto de editar los campos");
    alert("se habilitara el boton de guardar para su modificacion");

    document.getElementById('editAdminActivos').removeAttribute("disabled");
    document.getElementById('editFecha').removeAttribute("disabled");
    document.getElementById('editClient').removeAttribute("disabled");
    document.getElementById('editCedula').removeAttribute("disabled");
    document.getElementById('editTel').removeAttribute("disabled");
    document.getElementById('editEmail').removeAttribute("disabled");
    document.getElementById('editTipo').removeAttribute("disabled");
    document.getElementById('editSerial').removeAttribute("disabled");
    document.getElementById('editText').removeAttribute("disabled"); 

    document.getElementById('btnGuardarEdit').classList.add('habilitar');
    document.getElementById('btnCancelarEdit').classList.add('habilitar');
    document.getElementById('btnEdit').classList.add('guardar');
    document.getElementById('btnPrinter').classList.add('guardar');

    
}


/** funcion para limpiar los campos inputs cliente y activos */

const limpiarInputs = () => {
    const $cedula = document.getElementById('cedula').value = "";
    const $nameClient = document.getElementById('nombre').value = "";
    const $tel = document.getElementById('tel').value = "";
    const $email = document.getElementById('email').value = "";
    const $aSerial = document.getElementById('a-serial').value = "";
    const $aMarca = document.getElementById('a-marca').value = ""
    const $aText = document.getElementById('text-area').value = ""
   
   

}

/** FUNCION LIMPIAR HTML PARA QUE NO SE DUPLIQUEN LOS DATOS EN LA TABLA */
    const limpiarHtml = ($contTitleView) => {
        while($contTitleView.firstChild){
            $contTitleView.removeChild($contTitleView.firstChild);
        }
    }


   

/** cargamos los datos que tenemos actualmente cargados en el objecto  */
    mostrarDatosView($dataAdmin);