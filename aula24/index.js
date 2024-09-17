/**
 * Entre 0 - 11 - Bom dia 
 * Entre 12 - 17 - Boa Tarde
 * Entre 18 - 23 - Boa Noite
 */

const hora = 13;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
} else {
    console.log('Olá');
}