document.addEventListener("DOMContentLoaded", function(){ 
  
    var credito = {};
        
    document.getElementById('NomApe').addEventListener('click', function(e){

        e.preventDefault();

        let nombre = document.getElementById('nombre').value;           
        let apellido = document.getElementById('apellido').value;    

        if(nombre == "" || apellido == ""){
            
            alert("Datos faltantes");
        }else{

            credito.nombre = nombre;
            credito.apellido = apellido;

            document.getElementById("cardNomApe").classList.add("filter");
            document.getElementById("cardEdad").classList.remove("filter");

            document.getElementById("edad").removeAttribute("disabled");
            document.getElementById('nombre').setAttribute("readonly", true);
            document.getElementById('apellido').setAttribute("readonly", true);
            document.getElementById('NomApe').removeAttribute("href");
            
        }
        

    })

    document.getElementById('Edad').addEventListener('click', function(e){

        e.preventDefault();

        let edad = document.getElementById('edad').value;         

        if(edad == ""){
            
            alert("Datos faltantes");

        }else if(edad < 18){
            alert("Debe ser mayor a 18 años para solicitar un préstamo");
        
        }else{

            credito.edad = edad;            

            document.getElementById("cardEdad").classList.add("filter");
            document.getElementById("cardEmail").classList.remove("filter");

            document.getElementById("edad").setAttribute("readonly", true);
            document.getElementById('email').removeAttribute("disabled");
            document.getElementById('Edad').removeAttribute("href");
            
        }
        

    })

    document.getElementById('Email').addEventListener('click', function(e){

        e.preventDefault();

        let email = document.getElementById('email').value;         

        if(email == ""){
            
            alert("Datos faltantes");

        }else if(!email.includes("@")){

            alert("El campo Email debe tener un formato válido");
        
        }else{

            credito.email = email;            

            document.getElementById("cardEmail").classList.add("filter");
            document.getElementById("cardBanco").classList.remove("filter");

            document.getElementById("email").setAttribute("readonly", true);
            document.getElementById('banco').removeAttribute("disabled");
            document.getElementById('Email').removeAttribute("href");
            
        }
        

    })

    document.getElementById('Bancos').addEventListener('click', function(e){

        e.preventDefault();

        let banco = document.getElementById('banco').value;         

        if(banco == "" || banco == 0){
            
            alert("Datos faltantes");
        
        }else{

            credito.banco = banco;            

            document.getElementById("cardBanco").classList.add("filter");
            document.getElementById("cardCuotas").classList.remove("filter");

            document.getElementById("banco").setAttribute("readonly", true);
            document.getElementById('cuota').removeAttribute("disabled");
            document.getElementById('Bancos').removeAttribute("href");
            
        }
        

    })

    document.getElementById('Cuotas').addEventListener('click',  function(e){

        e.preventDefault();

        let cuota = document.getElementById('cuota').value;         

        if(cuota == 0){
            
            alert("Datos faltantes");
        
        }else{

            credito.cuota = cuota;            

            document.getElementById("cardCuotas").classList.add("filter");
            document.getElementById("cardMonto").classList.remove("filter");

            document.getElementById("cuota").setAttribute("readonly", true);
            document.getElementById('monto').removeAttribute("disabled");
            document.getElementById('submit').removeAttribute("disabled");
            document.getElementById('Cuotas').removeAttribute("href");
            
        }
        

    })

    document.getElementById('submit').addEventListener('click',   function(e){

        e.preventDefault();

        let monto = document.getElementById('monto').value;         

        if(monto < 10000 || monto > 100000){
            
            alert("Por favor, ingrese un monto dentro del rango permitido");
        
        }else{

            credito.monto = monto;            

            creditoJSON =JSON.stringify(credito);
   
            document.getElementById("cardMonto").classList.add("filter");            

            document.getElementById("monto").setAttribute("readonly", true);
            

            alert("Gracias "+ credito.nombre + " " + credito.apellido +" el crédito que solicitastaste por $"+ credito.monto+ " a devolver en cuotas "+ credito.cuota +" a depositar en el Banco "+ credito.banco +" ha sido preaprobado.  <br> <br> EN BREVE NOS COMUNICAREMOS CON USTED!!!");
            
        }
        

    })
    
    

}, false)

