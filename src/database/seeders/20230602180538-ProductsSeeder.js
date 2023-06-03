'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

await queryInterface.bulkInsert('products', [

    {
      name: 'Iphone 14 Pro max' ,

      description: 'Apple iPhone 14 llega este año con el mismo chip A15 Bionic del iPhone 13. Con una pantalla de 6.1 pulgadas, el iPhone 14 cuenta con una cámara dual con dos sensores de 12MP, siendo el principal estabilizado. La cámara selfie es de 12MP y suma PDAF y la batería puede cargarse en forma inalámbrica mediante MagSafe o por cable, logrando una carga de 50% en 30 minutos. El iPhone 14 también cuenta con parlantes stereo, Face ID, sistema de mensajería de emergencia vía satélite, y resiste el polvo y agua. ',

      processor: 'Apple A16 Bionic 4nm, Hexa-core 2x3.46 GHz Everest ',

      ram: '6 GB',

      memory: '128GB, 1TB, 256GB, 512GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '500.000',

      salePrice: '599.900',

      categories_id: '1',

      brands_id: '4',
    },
    {
      name: 'Iphone 14 ' ,

      description: 'Apple iPhone 14 llega este año con el mismo chip A15 Bionic del iPhone 13. Con una pantalla de 6.1 pulgadas, el iPhone 14 cuenta con una cámara dual con dos sensores de 12MP, siendo el principal estabilizado. La cámara selfie es de 12MP y suma PDAF y la batería puede cargarse en forma inalámbrica mediante MagSafe o por cable, logrando una carga de 50% en 30 minutos. El iPhone 14 también cuenta con parlantes stereo, Face ID, sistema de mensajería de emergencia vía satélite, y resiste el polvo y agua. ',

      processor: 'Apple A15 Bionic 5nm, Hexa-core 2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard ',

      ram: '6 GB',

      memory: '128GB, 256GB, 512GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3650000',

      salePrice: '4050000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 13 Pro max' ,

      description: 'El Apple iPhone 13 Pro Max es la variante con mayor tamaño de pantalla de la serie iPhone 13. Con una pantalla OLED de 6.7 pulgadas, el iPhone 13 Pro Max cuenta con un procesador Apple A15 Bionic con opciones de 512GB de almacenamiento, cámara cuádruple con tres lentes de 12 megapixels más un lente TOF 3D de tecnología LiDAR, cámara selfie de 12 megapixels, estabilización de imagen, zoom óptico 5x,nuevo modo cine, parlantes stereo, carga rápida e inalámbrica por MagSafe para iPhone o protocolo Qi, resistencia al polvo y agua con certificación iP68, y corre iOS 15. ',

      processor: 'Apple A15 Bionic 5nm, Hexa-core 2.22 GHz Avalanche + 4.8 GHz Blizzard ',

      ram: '6 GB',

      memory: '128GB, 1TB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '4700000',

      salePrice: '5200000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 13 ' ,

      description: 'El iPhone 13 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED utilizando la tecnología pro motion  y está potenciado por el nuevo procesador A15 Bionic, con opciones de 128 GB almacenamiento interno. El sistema de cámaras trasero es dual, con dos lentes de 12MP que agregan estabilización óptica de imagen, y varias mejoras de software y la cámara frontal TrueDepth es de 12 MP. El iPhone 12 utiliza reconocimiento de rostro Face ID para la seguridad, cuenta con soporte para carga rápida e inalámbrica, y corre iOS 15 ',

      processor: 'Apple A15 Bionic 5nm, Hexa-core 2x3,22 GHz Avalanche + 4xX.X GHz Blizzard ',

      ram: '4 GB',

      memory: '128GB, 256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3250900',

      salePrice: '3599900',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 12 Pro max' ,

      description: 'El Apple iPhone 12 Pro Max es la variante con mayor tamaño de pantalla de la serie iPhone 12. Con una pantalla OLED de 6.7 pulgadas, el iPhone 12 Pro Max cuenta con un procesador Apple A14 Bionic con opciones de 128GB de almacenamiento, cámara cuádruple con tres lentes de 12 megapixels más un lente TOF 3D de tecnología LiDAR, cámara selfie de 12 megapixels, estabilización de imagen, zoom óptico 5x, parlantes stereo, carga rápida e inalámbrica por MagSafe para iPhone o protocolo Qi, resistencia al polvo y agua con certificación iP68, y corre iOS 14. ',

      processor: 'Apple A14 Bionic 5nm, Hexa-core 2X3.1 GHz Firestorm + 4X1.8 GHz Icestorm',

      ram: '6 GB',

      memory: '128GB, 256GB',

      status:  'Usado',

      discount: '0',

      purchasePrice: '3150000',

      salePrice: '3449000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 12 ' ,

      description: 'El iPhone 12 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED y está potenciado por el nuevo procesador A14 Bionic, con opciones de 64GB almacenamiento interno. El sistema de cámaras trasero es dual, con dos lentes de 12MP que agregan estabilización óptica de imagen, y varias mejoras de software y la cámara frontal TrueDepth es de 12 MP. El iPhone 12 utiliza reconocimiento de rostro Face ID para la seguridad, cuenta con soporte para carga rápida e inalámbrica, y corre iOS 14.',

      processor: 'Apple A14 Bionic 5nm, Hexa-core 2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm',

      ram: '4 GB',

      memory: '64GB, 128GB, 256GB ',

      status:  'Usado',

      discount: '0',

      purchasePrice: '2765000',

      salePrice: '3050000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 11 Pro max' ,

      description: 'El Apple iPhone 11 Pro Max cuenta con pantalla Super Retina XDR de 6.5 pulgadas. El iPhone 11 Pro Max está potenciado por un procesador A13 Bionic de Apple, con almacentamiento de 64GB. Su cámara trasera es triple, de 12 MP + 12 MP + 12 MP integrando zoom óptico, gran angular y estabilización óptica de imagen, mientras que su cámara selfie es de 12 MP y ayuda al reconocimiento de rostro con Face ID. El resto de las características incluyen parlantes stereo, resistencia al agua IP68, batería de carga rápida y sonido Dolby Atmos.',

      processor: 'Apple A13 Bionic 7nm, Hexa-core 2X2.65 GHz Lightning + 4X1.8 GHz Thunder',

      ram: '4 GB',

      memory: '64GB, 256GB',

      status:  'Usado',

      discount: '0',

      purchasePrice: '2350000',

      salePrice: '2689900',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 11 ' ,

      description: 'El Apple iPhone 11 cuenta con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. El iPhone 11 cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad.',

      processor: 'Apple A13 Bionic 5nm, Hexa-core 2x2.65 GHz Lightning + 4x1.8 GHz Thunder',

      ram: '4 GB',

      memory: '64GB, 128GB ',

      status:  'Usado',

      discount: '0',

      purchasePrice: '1765000',

      salePrice: '2249000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone XR ' ,

      description: 'El iPhone XR tiene una pantalla LCD de 6.1 pulgadas de borde a borde con notch incluido y resolución Retina. El iPhone Xr está potenciado por el procesador A12 Bionic con 64GB de almacenamiento interno, y cuenta con una cámara de 12 megapixels, cámara frontal de 7 megapixels, carga inalámbrica y certificación IP67 a prueba de agua, disponible en una variedad enorme de colores.',

      processor: 'Apple A12 Bionic 5nm, Hexa-core 2X2.5 GHz Vortex + 4X1.6 GHz Tempest',

      ram: '4 GB',

      memory: '64GB, 128GB, 256GB ',

      status:  'Usado',

      discount: '0',

      purchasePrice: '1300000',

      salePrice: '1549000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone X ' ,

      description: ' El iPhone X cuenta con una pantalla de 5.8 pulgadas que abarca todo el frente del teléfono, dejando un espacio arriba para acomodar todos los sensores que contribuyen a Face ID, el nuevo método de desbloqueo por rostro, ya que el botón Touch ID desaparece. Con una atípica resolución de 2436 x 1125 pixels, acomoda 458ppi. La cámara es dual de 12 MP similar a la del iPhone 8, es resistente al agua y corre iOS 11.',

      processor: 'Apple A11 Bionic 5nm, Hexa-core 2.39 GHz 2x Monsoon + 4x Mistral',

      ram: '3 GB',

      memory: '64GB, 256GB ',

      status:  'Usado',

      discount: '0',

      purchasePrice: '1100000',

      salePrice: '1399900',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Samsung Galaxy Z Fold 4 ' ,

      description: ' el Samsung Galaxy Z Fold 4 cuenta con una pantalla interior AMOLED 2x dinámica de 7,6" con una resolución QXGA+ de 1812 x 2176 píxeles y una capa de cristal UTG ultrafina. Con una frecuencia de refresco adaptativa de 120 Hz, consigues una suavidad sin igual y una inmersión total en tus contenidos favoritos.',

      processor: 'Qualcomm SM8475 Snapdragon 8+ Gen 1/4nm Octa-core ',

      ram: '12 GB',

      memory: '256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '6139900',

      salePrice: '6649900',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy Z Flip 4 ' ,

      description: 'Con una pantalla AMOLED de 6.7 pulgadas a resolución FHD+ y tasa de refresco de 120Hz al estar abierto, el Galaxy Z Flip 4 tiene una pantalla cover de 1.9 pulgadas para notificaciones y atajos. Potenciado por un procesador Qualcomm Snapdragon 8+ Gen 1, el Galaxy Z Flip4 cuenta con 8GB de RAM y hasta 512GB de almacenamiento interno.',

      processor: 'Qualcomm Snapdragon 8+ Gen 1 a 3,18 GHz-Octa-core 1x3.19 GHz Cortex-X2',

      ram: '8 GB',

      memory: '256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3799900',

      salePrice: '3500000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy S23 Ultra ' ,

      description: 'Descubre el Galaxy S23 Ultra, con la potencia del Note. Fino y atrevido, con un marco pulido que rodea la forma extruida para lograr una elegante simetría. Y la cámara lineal, realzada por los aros de la lente de espejo, parece flotar. Por fin ha ocurrido: Galaxy S y S Pen son compatibles. Escribe, dibuja y controla tu móvil con tan solo sacarlo de su parte inferior.',

      processor: 'Qualcomm Snapdragon 8+ Gen 1 a 3,18 GHz-Octa-core 1x3.19 GHz Cortex-X2',

      ram: '12 GB',

      memory: '256GB, 512GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '5800900',

      salePrice: '5480000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy S23  ' ,

      description: 'Este smartphone te cautiva con su diseño, el modulo de cámara cuenta con un diseño exclusivo y su tamaño de 6.1" en su display avanzado, te ofrece máxima portabilidad en un diseño compacto y con materiales sostenibles. La cámara de este modelo te ofrece selfies, retratos y videos nítidos, libres de ruido y con el mayor brillo, cuando capturas en la noche',

      processor: 'Qualcomm SM8550-AC Snapdragon 8 Gen 2,4 nm, Octa-core 1x3.36 GHz Cortex-X3',

      ram: '8 GB',

      memory: '256 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '4180900',

      salePrice: '4520000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy Note 20 Ultra ' ,

      description: 'Equipado con una revolucionaria pantalla curva Quad HD+ de 6.9", el  Samsung Galaxy Note 20 Ultra combina potencia, conectividad, elegancia y facilidad de uso en un solo teléfono inteligente. Alberga un procesador Exynos. 990 Octa-Core sincronizados a 2,73 GHz, 12 GB de RAM y una capacidad de almacenamiento de 256GB. Y con su cámara de triple sensor de 108+12+12MP toma hermosas fotos.',

      processor: 'Octa-core 2x2.73 GHz Mongoose M5 y 4x2.0 GHz Cortex-A55 Exynos 990 7 nm ',

      ram: '12 GB',

      memory: '256 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3799900',

      salePrice: '3950000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy A54 ' ,

      description: '¡Descubra el Samsung Galaxy A54 5G 128gb | 6gb y disfrute de un celular de última generación al mejor precio! Con su cámara principal triple de 50MP, 12MP y 5MP y su cámara Selfie de 32MP, ¡captura los mejores momentos con la más alta calidad! ¿Estás preparado para la experiencia?',

      processor: 'Exynos 1380 5 nm -Octa-core 4x2.4 GHz Cortex-A78 y 4x2.0 GHz Cortex-A55 ',

      ram: '6 GB',

      memory: '128 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1669900',

      salePrice: '1850000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy A53 ' ,

      description: 'El Galaxy A53 5G cuenta con una pantalla Super AMOLED Infinity-O de 6,5" con resolución Full HD+ de 1080 x 2400 píxeles. Podrás disfrutar de tus vídeos en Full HD, de tus fotos en tamaño extra grande, y navegar por Internet con una comodidad excepcional, todo ello manteniendo una impresionante reproducción y respeto de los colores. Y con una frecuencia de refresco de 120 Hz, disfrutarás de una experiencia más cómoda y fluida.',

      processor: 'Exynos 1280 5 nm Octa-core 2x2.4 GHz Cortex-A78 y 6x2.0 GHz Cortex-A55 ',

      ram: '6 GB',

      memory: '128 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1260000',

      salePrice: '1479900',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy A34 ' ,

      description: 'El Samsung Galaxy A34 5G 256gb | 8gb es el celular ideal para un uso intenso. Su pantalla Amoled da una experiencia visual única, y su gran capacidad de almacenamiento 256gb y 8gb de RAM permiten disfrutar de la mejor experiencia. ¡Tranquilidad, rapidez y comodidad al alcance de tu mano!',

      processor: 'Octa-core 2x2.6 GHz Cortex-A78 y 6x2.0 GHz Cortex-A55',

      ram: '8 GB',

      memory: '128GB, 256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1380000',

      salePrice: '1600000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy A33 ' ,

      description: 'El Samsung Galaxy A33 5G maneja cuatro cámaras de 48+8+5+2 MP para ofrecerte fotos nítidas y claras de día o de noche. Utiliza el objetivo ultra gran angular de 8MP para capturar la vista más amplia posible, Con cámara frontal de 13 MP, tus selfies serán de una calidad inigualable.',

      processor: 'Octa-core 2x2.4 GHz Cortex-A78 y 6x2.0 GHz Cortex-A55-Exynos 1280 ',

      ram: '6 GB',

      memory: '128GB, 256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1000000',

      salePrice: '1139900',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Realme C35 ' ,

      description: 'REALME C35 un producto de alto performance, con características de alta gama como carga inversa que permite cargar otro teléfono, cámaras 50 MPX + 8MPX para fotografías de una calidad impresionante, adicional su increíble pantalla DE 6.56" permite una mejor visualización con un diseño ergonómico y que da mas amplitud visual, batería de LiPo de 5000 mAh, que te permite mas tiempo de uso sin estar recargando constantemente',

      processor: 'Octa-core 2x2.0 GHz Cortex-A75 y 6x1.8 GHz Cortex-A55',

      ram: '4 GB',

      memory: '128 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '500.000',

      salePrice: '689.900',

      categories_id: '1',

      brands_id: '3',
    },

    {
      name: 'Realme C31 ' ,

      description: 'Realme C31 es un sencillo smartphone Android con una pantalla HD+ de 6.5 pulgadas. Potenciado por un procesador Unisoc T612 con 3GB o 4GB de RAM y 32GB o 64GB de almacenamiento interno, el Realme C31 cuenta con una cámara triple dorsal con lente principal de 13MP y una cámara selfie de 5MP. Una batería de 5000 mAh alimenta al Realme C31 completando sus características con lector de huellas lateral y Android 11.',

      processor: 'Unisoc T612 1.8GHz',

      ram: '3GB / 4GB',

      memory: '32GB / 64GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '400.000',

      salePrice: '560.000',

      categories_id: '1',

      brands_id: '3',
    },

    {
      name: 'Realme C30 ' ,

      description: 'Realme C30 es un smartphone Dual SIM con software Android 11 Go Edition lanzado en 2022, que incluye una cámara trasera con resolución de 8 MP con flash y cámara frontal de 5 MP y monta una pantalla con muesca de 6.5 pulgadas con resolución 720 x 1600 puntos.',

      processor: 'Unisoc T612 1.8GHz',

      ram: '2GB / 3GB',

      memory: '32GB / 64GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '305.000',

      salePrice: '350.000',

      categories_id: '1',

      brands_id: '3',
    },

    {
      name: 'Realme C11 ' ,

      description: 'Realme C11 cuenta con una pantalla HD+ de 6.5 pulgadas, un procesador Helio G35 de Mediatek con 2GB de memoria RAM y 32GB de almacenamiento interno expandible, cámara posterior dual de 13 MP + 2 MP, y cámara frontal para selfies de 5 megapixels',

      processor: 'Octa-núcleo 1,6 GHz',

      ram: '2GB / 3GB',

      memory: '32GB / 64GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '328.900',

      salePrice: '400.000',

      categories_id: '1',

      brands_id: '3',
    },

    {
      name: 'Realme 9 Pro ' ,

      description: 'Realme 9 Pro llega con una pantalla IPS de 6.6 pulgadas a resolución FHD+ y tasa de refresco de 120Hz, el Realme 9 Pro está potenciado por un procesador Snapdragon 695 de Qualcomm, con opciones de 6GB o 8GB de memoria RAM con 128GB de almacenamiento interno. En su dorsal encontramos una cámara triple de 64MP + 8MP + 2MP, y al frente una cámara de 16MP para selfies. La batería del Realme 9 Pro es de 5000 mAh y soporta carga rápida, completando sus características con un lector de huellas lateral y corre Android 12.',

      processor: 'Qualcomm SM6375 Snapdragon 695 5G (6 nm)',

      ram: '8GB',

      memory: '128 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '920.900',

      salePrice: '1.100.000',

      categories_id: '1',

      brands_id: '3',
    },

    {
      name: 'Realme 9  ' ,

      description: 'El Realme 9 es la variante 4G del homónimo, con una pantalla FHD+ de 6.4 pulgadas y tasa de refresco de 90Hz. El Realme 9 está potenciado por un procesador Snapdragon 680 con 6GB o 8GB de RAM con 128GB de almacenamiento interno, y cuenta con cámara triple posterior de 108MP y cámara frontal de 16MP. Una batería de 5000 mAh de carga rápida alimenta al Realme 9, completando sus características con lector de huellas bajo la pantalla, sonido Dolby Atmos, y Android 12',

      processor: 'Qualcomm SM6225 Snapdragon 680 4G (6 nm)',

      ram: '8GB',

      memory: '128 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '907.900',

      salePrice: '1.043.900',

      categories_id: '1',

      brands_id: '3',
    },

    {
      name: 'Realme 9  ' ,

      description: 'El Realme 9 es la variante 4G del homónimo, con una pantalla FHD+ de 6.4 pulgadas y tasa de refresco de 90Hz. El Realme 9 está potenciado por un procesador Snapdragon 680 con 6GB o 8GB de RAM con 128GB de almacenamiento interno, y cuenta con cámara triple posterior de 108MP y cámara frontal de 16MP. Una batería de 5000 mAh de carga rápida alimenta al Realme 9, completando sus características con lector de huellas bajo la pantalla, sonido Dolby Atmos, y Android 12',

      processor: 'Qualcomm SM6225 Snapdragon 680 4G (6 nm)',

      ram: '8GB',

      memory: '128 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '907.900',

      salePrice: '1.043.900',

      categories_id: '1',

      brands_id: '3',
    },

    {
      name: 'Xiaomi MI 12 ' ,

      description: 'Xiaomi 12 es el flagship compacto de la serie 12. Con una pantalla OLED de 6.28 pulgadas y tasa de refresco de 120Hz, el Xiaomi 12 está potenciado por el procesador más potente de Qualcomm a la fecha, el Snapdragon 8 Gen 1, acompañado de 8GB o 12GB de RAM y 128GB o 256GB de almacenamiento interno. Su cámara dorsal es triple, con un sensor principal de 50MP, un lente ultrawide de 13MP y un lente telefoto/macro de 5MP, mientras que de las selfies se encarga un sensor de 32MP al frente. Alimentado por una batería de 4500 mAh, el Xiaomi 12 soporta carga rápida de 67W, carga inalámbrica de 50W, y completa sus características con parlantes stereo, lector de huellas bajo la pantalla, y corre MIUI 13 basado en Android 12.',

      processor: 'Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)',

      ram: '8GB',

      memory: '128GB, 256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '2.325.000',

      salePrice: '2.550.900',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi MI 12 Pro' ,

      description: 'La pantalla AMOLED de 6,73" del Xiaomi 12 Pro 5G, con una resolución Quad HD+ de 1440 x 3200 píxeles, ofrece una experiencia fluida y agradable. AdaptiveSync Pro permite al Xiaomi 12 Pro 5G ajustar automáticamente la pantalla LTPO de 1Hz a 120Hz en función del contenido mostrado para una navegación ultra suave.',

      processor: 'Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)',

      ram: '12GB',

      memory: '128GB, 256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '2.980.000',

      salePrice: '3.320.900',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi MI 13 Lite' ,

      description: 'El Nuevo Xiaomi 13 Lite con 3 cámaras que marcan estilo, disfrutando de una cámara principal de 50MP con gran percepción de luz, consiguiendo la mejor foto o video en prácticamente cualquier situación, su gran variedad de modos serán el perfecto aliado en los momentos mas creativos, consiguiendo sacar tanto en fotos como videos. Sus cámaras selfies no permiten que se escape ningún detalle, con una resolución de 32MP en su cámara principal y una segunda cámara ultra gran angular de 8MP',

      processor: 'Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)',

      ram: '8GB',

      memory: '128GB, 256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1863.900',

      salePrice: '2.000.000',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Redmi Note 12 Pro Plus' ,

      description: 'El Xiaomi Redmi Note 12 Pro+ cuenta con una pantalla OLED de 6.67 pulgadas a resolución FHD+ y tasa de refresco de 120Hz y potenciado por un procesador Dimensity 1080 de MediaTek con hasta 12GB de RAM y hasta 256GB de almacenamiento interno no expandible. La cámara dorsal del Redmi Note 12 Pro+ cuenta con un sensor de 200 MP, secundado por un sensor ultrawide de 8 MP y una cámara macro de 2 MP y la cámara frontal es de 16MP. Alimentado por una batería de 5000 mAh con soporte para carga rápida de 120W, el Redmi Note 12 Pro+ completa sus características con un lector de huellas bajo la pantalla, parlantes stereo, y corre Android 12.',

      processor: 'Mediatek Dimensity 1080 2.6GHz',

      ram: '12GB',

      memory: '256GB, 512GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.780.000',

      salePrice: '2.100.000',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Poco F4 GT' ,

      description: 'El Xiaomi Poco F4 es un smartphone Android con una pantalla AMOLED de 6.67 pulgadas a resolución FHD+ y tasa de refresco de 120Hz. Potenciado por un procesador Snapdragon 870, el Poco F4 cuenta con hasta 8GB de RAM y hasta 256GB de almacenamiento interno. La cámara trasera es triple, con un lente principal de 64MP que cuenta con OIS, una cámara ultrawide de 8MP y una cámara macro de 2MP, mientras que la cámara selfie es de 20MP. El Poco F4 está alimentado por una batería de 4500 mAh con carga rápida de 67W y completa sus características con parlantes stereo, resistencia al polvo y agua, lector de huellas y corre Android 12.',

      processor: 'Snapdragon 8 Gen 1 3GHz',

      ram: '8GB',

      memory: '128Gb, 256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.780.000',

      salePrice: '2.050.000',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Poco X4 Pro' ,

      description: 'El Xiaomi Poco X4 Pro 5G cuenta con un procesador Qualcomm Snapdragon 695 5G Octo-Core de alto rendimiento para ofrecerte un rendimiento superior. Aprovecha sus 8 núcleos y la GPU Adreno 619 para una experiencia de juego inolvidable. Además, con 6GB de RAM y 128GB de espacio de almacenamiento, podrás instalar todas tus aplicaciones sin problemas.',

      processor: 'Qualcomm SM6375 Snapdragon 695 5G (6 nm)',

      ram: '6GB',

      memory: '128Gb ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.080.000',

      salePrice: '1.200.100',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Poco X5' ,

      description: 'El nuevo Poco X5 5G incorpora un sistema de cámara triple Ultra-HD Al de 48 MP con una excelente optimización de color e imagen maneja fácilmente varios escenarios de disparo para ayudar a dar vida a tu trabajo.',

      processor: 'Qualcomm SM6375 Snapdragon 695 5G (6 nm)',

      ram: '8GB',

      memory: '128Gb, 256Gb ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.035.00',

      salePrice: '1.290.900',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Poco X5 Pro' ,

      description: 'La cámara principal de 108 MP combina un sensor ultra grande con la potencia de la tecnología de encuadernación de píxeles 9 en 1 para una resolución increíble incluso en la oscuridad. Con la potente capacidad de cálculo, tanto la velocidad de obturación como la velocidad de imagen mejoran en gran medida.',

      processor: 'Qualcomm SM7325 Snapdragon 778G 5G (6 nm)',

      ram: '8GB',

      memory: '128Gb, 256Gb ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.235.00',

      salePrice: '1.599.900',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Redmi Note 10 Pro' ,

      description: 'El  Xiaomi Redmi Note 10 Pro sabe cómo cumplir todos tus deseos. Para ello, cuenta con una pantalla táctil AMOLED de 6.67 " y frecuencia de refresco de 120Hz que muestra una resolución Full HD+ de 1080 x 2400 píxeles, incorpora un procesador Qualcomm Snapdragon 732G Octo-Core de 2.3GHz, un espacio de almacenamiento de 128GB y 6GB de RAM para asegurar fluidez y rapidez en todos sus usos.',

      processor: 'Qualcomm SM7150 Snapdragon 732G (8 nm)',

      ram: '8GB',

      memory: '128Gb, 256Gb ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '935.000',

      salePrice: '1.159.900',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Redmi Note 10S' ,

      description: 'El Xiaomi Redmi Note 10S es una versión del Redmi Note 10 que mejora la cámara de fotos trasera. Conservando la pantalla Super AMOLED de 6.43 pulgadas a resolución Full HD+, el Redmi Note 10S está potenciado por un procesador Helio G95 de Mediatek, con opciones de 6GB o 8GB de memoria RAM y 64GB o 128GB de almacenamiento interno expandible. La cámara posterior tiene una configuración cuádruple, con lentes de 64MP, 8MP, 2MP y 2MP, mientras que la cámara frontal es de 13MP. El Redmi Note 10S cuenta con una batería de 5000 mAh de carga rápida, parlantes stereo, lector de huellas montado de lado, y corre MIUI 12 basado en Android 11.',

      processor: 'Mediatek Helio G95 2.05GHz',

      ram: '8GB',

      memory: '64GB, 128Gb',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '685.000',

      salePrice: '927.900',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Redmi Note 11S' ,

      description: 'El Xiaomi Redmi Note 11S es una variante del Redmi Note 11 con un procesador MediaTek Helio G96. Con una pantalla AMOLED FHD+ de 6.43 pulgadas y refresco de 90Hz, el Redmi Note 11 cuenta con 6GB o 8GB de RAM con 64GB o 128GB de almacenamiento y un conjunto de cuatro cámaras dorsales, con una cámara principal de 108MP y y una cámara selfie de 16MP al frente. Alimentado por una batería de 5000 mAh de carga rápida de 33W, el Redmi Note 11S completa sus características con unos parlantes stereo, lector de huellas lateral, y corre MIUI 13 basado en Android 11',

      processor: 'Qualcomm SM6225 Snapdragon 680 4G (6 nm)',

      ram: '6GB',

      memory: '64GB, 128Gb',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '697.000',

      salePrice: '975.000',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Redmi Note 11 Pro' ,

      description: 'El Xiaomi Redmi Note 11 Pro 5G está equipado con una cámara cuádruple de 108+8+2+2 MP que te permite tomar fotos de alta resolución. Con la lente macro, podrás tomar primeros planos de calidad. El sensor gran angular es muy útil para capturar todo el paisaje en una sola toma y así hacer más tomas sin cambiar la posición de disparo. Y con el nuevo modo de lapso de tiempo, logra tus lapsos de tiempo más hermosos, incluso en condiciones de iluminación desfavorables.',

      processor: 'Qualcomm SM6375 Snapdragon 695 5G (6 nm)',

      ram: '6GB',

      memory: '64GB, 128Gb',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '968.900',

      salePrice: '1.250.000',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Xiaomi Redmi Note 11 Pro Plus' ,

      description: 'El Xiaomi Redmi Note 11 Pro+ 5G está equipado con una triple cámara de 108+8+2 MP y una cámara frontal de 16 MP. También tiene dos ranuras SIM, así como una batería de 4500 mAh para que puedas disfrutar de todas las funciones que te ofrece tu nuevo aliado diario durante mucho tiempo.',

      processor: 'MediaTek Dimensity 920 (6 nm',

      ram: '8GB',

      memory: '128Gb, 256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.275.00',

      salePrice: '1.499.900',

      categories_id: '1',

      brands_id: '1',
    },

    {
      name: 'Huawei P30 Lite' ,

      description: 'El Huawei P30 Lite es la variante más básica de la nueva serie P30 de Huawei. El Huawei P30 Lite cuenta con una pantalla Full HD+ de 6.15 pulgadas con notch, y está potenciado por un procesador Kirin 710 de ocho núcleos con 4GB o 6GB de memoria RAM y 128GB de almacenamiento interno. La cámara principal del Huawei P30 Lite es triple, en configuración 24MP + 8MP + 2MP, y su cámara para selfies es de 32MP. Completando sus características, encontramos en el P30 Lite una batería de 3340 mAh, lector de huellas en su posterior, y puerto USB-C.',

      processor: 'Kirin 710 2.2GHz',

      ram: '6GB',

      memory: '128GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '385.000',

      salePrice: '600.000',

      categories_id: '1',

      brands_id: '5',
    },

    {
      name: 'Huawei P10' ,

      description: 'El Huawei P10 es el sucesor del Huawei P9, manteniendo muchas de las características. El P10 cuenta con una pantalla Full HD de 5.1 pulgadas, procesador octa-core Kirin 960, 4GB de RAM, 64GB de almacenamiento interno expandible, cámara dual Leica de dos sensores: 13 MP y 20 MP monocromático, mientras que al frente cuenta con una cámara de 8 megapixels. El Huawei P10 también tiene una batería de 3200 mAh con carga rápida Super Charge, y corre Android 7.0 Nougat con la interfaz EMUI 5.1.',

      processor: 'Kirin 960 2.4GHz',

      ram: '4GB',

      memory: '64GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '395.000',

      salePrice: '490.000',

      categories_id: '1',

      brands_id: '5',
    },

    {
      name: 'Huawei P9' ,

      description: 'El Huawei P9 es el nuevo smartphone insignia de Huawei. Creado en conjunto con Leica, el P9 cuenta con una cámara dual de 12 MP que permite infinidad de trucos y posprocesamiento. También está fabricado en metal, con un chasis unibody con su cámara perfectamente integrada. En cuanto a características, posee una pantalla 1080p de 5.2 pulgadas, procesador Kirin 955 octa-core, versiones de 2GB de RAM y 32GB de ROM o bien 3GB de RAM y 64GB de ROM, cámara frontal de 8 megapixels, y batería de 3000 mAh, corriendo Android 6.0 Marshmallow',

      processor: 'Kirin 955 2GHz',

      ram: '4GB',

      memory: '32GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '355.000',

      salePrice: '420.000',

      categories_id: '1',

      brands_id: '5',
    },

    {
      name: 'Huawei Y9 2019' ,

      description: 'El Huawei Y9 2019 te ofrece mejores fotografías con reconocimiento de objetos y escenas|, gracias a sus 4 cámaras con inteligencia artificial, sabrás todo de los lugares que visitas. Además, tendrás mejor visualización de tus contenidos con la nueva generación de pantallas FullView 2.0 de 6.5 pulgadas. Cuenta con una memoria interna de 64 GB para que almacenes todos tus archivos y con su gestor de batería, podrás disfrutar por más tiempo el teléfono.',

      processor: 'OCTA-CORE 4XCORTEX-A73 2.2GHZ+A53 1.7GH',

      ram: '3GB',

      memory: '128GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '355.000',

      salePrice: '550.000',

      categories_id: '1',

      brands_id: '5',
    },

    {
      name: 'Huawei Y5 Neo' ,

      description: 'HUAWEI Y5 Neo te ofrece una apariencia y tecnología refinada.| Sumérgete una vista emocionante con su increíble pantalla de 5.45" pulgadas HD+, desbloquéalo en una fracción de segundo con su sistema de reconocimiento fácil y diviértete mientras escuchas tu música o videos favoritos gracias a su batería de larga duración y con la tecnología Power Saving 6.0. ¡Compra tu teléfono HUAWEI en nuestra tienda ahora!',

      processor: 'OCTA-CORE 4XCORTEX-A73 2.2GHZ+A53 1.7GH',

      ram: '1GB',

      memory: '16GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '255.000',

      salePrice: '359.000',

      categories_id: '1',

      brands_id: '5',
    },
  ], 

{});

  },

  
async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
