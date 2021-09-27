const { response, request } = require('express')
const { Client } = require('whatsapp-web.js');
const axios = require('axios').default;

let qrView = '';

const usuarioGet = async (req = request, res = response)=>{

    let url = 'https://dniruc.apisperu.com/api/v1/dni/';
    const token = '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Impvc2VhbnRvbmlvcnN5c3RlbUBnbWFpbC5jb20ifQ.BCnFI0IWlU9IEjv5pXu74c8yysKmGP_NN1_c7kmu-QI'
    
    const client = new Client({ puppeteer: { headless: true }});

    client.on('qr', (qr) => {
        // Generate and scan this code with your phone
        qrView = qr;
    });

    res.json({
        whatsapp: qrView
    })

    client.on('ready', () => {
        console.log('Client is ready!');
    });
    
    client.on('message', (msg) => {

        // desestructurar un objeto
        const {from, to, body } = msg;

        switch (body) {

            case '1':
                    listenMessage(from, 'Mi nombre es Jedibot 🥰 asistente virtual de José Antonio');
                break;
            case '2':
                let hoy = new Date();
                    let fecha = hoy.getDate() + '-' + (hoy.getMonth()+1) + '-' + hoy.getFullYear();
                    listenMessage(from, `La fecha de hoy es ${fecha}`);
                break;
            case '3':
                    let info = '';
                    info +='🙃 Los correos de José son:\n';
                    info +='- joseantoniorojas999@gmail.com\n';
                    info +='- joseantoniorsystem@gmail.com\n';
                    info +='- O puedes llamarle al 964145204\n';
                    listenMessage(from, info);
                break;
            case '4':
                    listenMessage(from, 'Ups 😇. no esta permitido mostrar sus redes. ');
                break;
            case '5':
                    listenMessage(from, 'Adios cuidese 😎');
                break;
            default:
                // si las opciones no coinciden escribir enviar el menú
                listenMessage(from, Menu() );
                break;
        }

        //msg.reply('Adios cuidese 😎'); se utiliza para responder a una pregunta en especifica 

    });

    const listenMessage = (to, mensaje) =>{
        setTimeout(() => { client.sendMessage( to, mensaje) }, 1000);
    }
    
    
    client.initialize();

    
};

const Menu = () =>{

    let menu = '';
        menu +="Hola como estas 👋, es un gusto. 😎\n";
        menu +="Espero poder ayudarte. En estos momentos José Antonio esta ocupado. gracias 😇\n\n";
        menu +="Escribe el número de la información que deseas consultar. 😉😉\n\n";
        menu +="1. ¿Quién eres?\n";
        menu +="2. ¿Cúal es la fecha de hoy?\n";
        menu +="3. ¿Cual es el correo de José?\n";
        menu +="4. Redes sociales de José\n";
        menu +="5. Adios\n";

    return menu;
}



module.exports = {
    usuarioGet
}