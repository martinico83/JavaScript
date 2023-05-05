const metodoPago = 'Efectivo';

switch (metodoPago) {
    case 'Tarjeta':
        console.log('Has pagado con tarjeta');
        break;
    case 'Cheque':
        console.log('Has pagado con Cheque');
        break;
    case 'Efectivo':
        console.log('Has pagado con Efectivo');
        break;    
    default:
        console.log('Todabia no has pagado');
        break
}