const image = {uri: 'https://www.formula1.com/content/dam/fom-website/manual/XPB_Images/XPB_1025389_HiRes.jpg.transform/9col/image.jpg'};

const driverImages = [
  'https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1920.medium.jpg/1554818913486.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1920.medium.jpg/1554818929157.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1920.medium.jpg/1554819019533.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1567179277948.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1920.medium.jpg/1567175200601.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1920.medium.jpg/1567085905449.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1920.medium.jpg/1566295417688.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/image.img.1920.medium.jpg/1566295320855.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1920.medium.jpg/1554819092086.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1920.medium.jpg/1554818944774.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1920.medium.jpg/1567085899345.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/kimi-raikkonen/_jcr_content/image.img.1920.medium.jpg/1554819054944.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/daniil-kvyat/_jcr_content/image.img.1920.medium.jpg/1554819075478.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/nico-hulkenberg/_jcr_content/image.img.1920.medium.jpg/1554818995713.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.1920.medium.jpg/1554818895505.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.1920.medium.jpg/1568719901149.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/antonio-giovinazzi/_jcr_content/image.img.1920.medium.jpg/1554818879413.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/romain-grosjean/_jcr_content/image.img.1920.medium.jpg/1568719868304.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/robert-kubica/_jcr_content/image.img.1920.medium.jpg/1554818824881.jpg',
  'https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1920.medium.jpg/1554818804832.jpg',
];

const constructorImages = [
  'https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/logo.img.jpg/1486740144183.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/logo.img.jpg/1521797345005.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Red-Bull/_jcr_content/logo.img.jpg/1514762875081.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/logo.img.jpg/1515152671364.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Renault/_jcr_content/logo.img.jpg/1546853275141.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Toro-Rosso/_jcr_content/logo.img.jpg/1521797337296.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Racing-Point/_jcr_content/logo.img.jpg/1552473335851.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Alfa-Romeo/_jcr_content/logo.img.png/1549450808736.png',
  'https://www.formula1.com/content/fom-website/en/teams/Haas/_jcr_content/logo.img.png/1568040720597.png',
  'https://www.formula1.com/content/fom-website/en/teams/Williams/_jcr_content/logo.img.png/1551261665481.png',
];

const carImages = [
  'https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/image16x9.img.1920.medium.jpg/1561122939027.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/image16x9.img.1920.medium.jpg/1561122827735.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Red-Bull/_jcr_content/image16x9.img.1920.medium.jpg/1561122862550.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/image16x9.img.1920.medium.jpg/1561122843324.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Renault/_jcr_content/image16x9.img.1920.medium.jpg/1561122954320.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Toro-Rosso/_jcr_content/image16x9.img.1920.medium.jpg/1561123014028.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Racing-Point/_jcr_content/image16x9.img.1920.medium.jpg/1561122994100.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Alfa-Romeo/_jcr_content/image16x9.img.1920.medium.jpg/1561122808221.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Haas/_jcr_content/image16x9.img.1920.medium.jpg/1561196026039.jpg',
  'https://www.formula1.com/content/fom-website/en/teams/Williams/_jcr_content/image16x9.img.1920.medium.jpg/1561122881760.jpg'
];

const images = driverImages.concat(carImages);

const constructors = [
  {key: 'mercedes', name: 'Mercedes'},
  {key: 'ferrari', name: 'Fearrari'},
  {key: 'redbull', name: 'Redbull Racing Honda'},
  {key: 'maclaren', name: 'Maclaren Renault'},
  {key: 'renault', name: 'Renault'},
  {key: 'toro-roso', name: 'Scuderia Toro Rosso Honda'},
  {key: 'racing-point', name: 'Racing Point BWT Mercedes'},
  {key: 'alfa-romeo', name: 'Alfa Romeo Racing Ferrari'},
  {key: 'haas', name: 'Haas Ferrari'},
  {key: 'williams', name: 'Williams Mercedes'},
];

const drivers = [
  {key: '44', name: 'Lewis Hamilton'},
  {key: '77', name: 'Valteri Bottas'},
  {key: '5', name: 'Sebastian Vettel'},
  {key: '16', name: 'Charles Leclerc'},
  {key: '33', name: 'Max Verstappen'},
  {key: '27', name: 'Alex Albon'},
  {key: '55', name: 'Carlos Sainz'},
  {key: '4', name: 'Lando Norris'},
  {key: '3', name: 'Daniel Ricciardo'},
  {key: '31', name: 'Esteban Ocon'},
  {key: '10', name: 'Pierre Gasly'},
  {key: '26', name: 'Danil Kvyat'},
  {key: '11', name: 'Segio Perez'},
  {key: '18', name: 'Lance Strol'},
  {key: '7', name: 'Kimi Raikonen'},
  {key: '99', name: 'Antonio Giovinazzi'},
  {key: '20', name: 'Kevin Magnussen'},
  {key: '8', name: 'Romain Grosjean'},
  {key: '63', name: 'George Russel'},
  {key: '88', name: 'Robert Kubica'},
];

export {images, constructors, drivers};
