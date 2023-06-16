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

      processor: 'Apple A16 Bionic 4nm',

      ram: '6GB',

      memory: '128/256/512GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '5.000.000',

      salePrice: '5.990.900',

      categories_id: '1',

      brands_id: '4',
    },
    {
      name: 'Iphone 14 ' ,

      description: 'Apple iPhone 14 llega este año con el mismo chip A15 Bionic del iPhone 13. Con una pantalla de 6.1 pulgadas, el iPhone 14 cuenta con una cámara dual con dos sensores de 12MP, siendo el principal estabilizado. La cámara selfie es de 12MP y suma PDAF y la batería puede cargarse en forma inalámbrica mediante MagSafe o por cable, logrando una carga de 50% en 30 minutos. El iPhone 14 también cuenta con parlantes stereo, Face ID, sistema de mensajería de emergencia vía satélite, y resiste el polvo y agua. ',

      processor: 'Apple A15 Bionic 5nm',

      ram: '6GB',

      memory: '128/256/512GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3.650.000',

      salePrice: '4.050.000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 13 Pro max' ,

      description: 'El Apple iPhone 13 Pro Max es la variante con mayor tamaño de pantalla de la serie iPhone 13. Con una pantalla OLED de 6.7 pulgadas, el iPhone 13 Pro Max cuenta con un procesador Apple A15 Bionic con opciones de 512GB de almacenamiento, cámara cuádruple con tres lentes de 12 megapixels más un lente TOF 3D de tecnología LiDAR, cámara selfie de 12 megapixels, estabilización de imagen, zoom óptico 5x,nuevo modo cine, parlantes stereo, carga rápida e inalámbrica por MagSafe para iPhone o protocolo Qi, resistencia al polvo y agua con certificación iP68, y corre iOS 15. ',

      processor: 'Apple A15 Bionic 5nm',

      ram: '6GB',

      memory: '128GB/1TB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '4.700.000',

      salePrice: '5.200.000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 13 ' ,

      description: 'El iPhone 13 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED utilizando la tecnología pro motion  y está potenciado por el nuevo procesador A15 Bionic, con opciones de 128 GB almacenamiento interno. El sistema de cámaras trasero es dual, con dos lentes de 12MP que agregan estabilización óptica de imagen, y varias mejoras de software y la cámara frontal TrueDepth es de 12 MP. El iPhone 12 utiliza reconocimiento de rostro Face ID para la seguridad, cuenta con soporte para carga rápida e inalámbrica, y corre iOS 15 ',

      processor: 'Apple A15 Bionic 5nm, Hexa-core 2x3,22 GHz Avalanche + 4xX.X GHz Blizzard ',

      ram: '4GB',

      memory: '128/256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3.250.900',

      salePrice: '3.599.900',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 12 Pro max' ,

      description: 'El Apple iPhone 12 Pro Max es la variante con mayor tamaño de pantalla de la serie iPhone 12. Con una pantalla OLED de 6.7 pulgadas, el iPhone 12 Pro Max cuenta con un procesador Apple A14 Bionic con opciones de 128GB de almacenamiento, cámara cuádruple con tres lentes de 12 megapixels más un lente TOF 3D de tecnología LiDAR, cámara selfie de 12 megapixels, estabilización de imagen, zoom óptico 5x, parlantes stereo, carga rápida e inalámbrica por MagSafe para iPhone o protocolo Qi, resistencia al polvo y agua con certificación iP68, y corre iOS 14. ',

      processor: 'Apple A14 Bionic 5nm',

      ram: '6GB',

      memory: '128/256GB',

      status:  'Usado',

      discount: '0',

      purchasePrice: '3.150.000',

      salePrice: '3.449.000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 12 ' ,

      description: 'El iPhone 12 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED y está potenciado por el nuevo procesador A14 Bionic, con opciones de 64GB almacenamiento interno. El sistema de cámaras trasero es dual, con dos lentes de 12MP que agregan estabilización óptica de imagen, y varias mejoras de software y la cámara frontal TrueDepth es de 12 MP. El iPhone 12 utiliza reconocimiento de rostro Face ID para la seguridad, cuenta con soporte para carga rápida e inalámbrica, y corre iOS 14.',

      processor: 'Apple A14 Bionic 5nm',

      ram: '4GB',

      memory: '64/128/256GB ',

      status:  'Usado',

      discount: '0',

      purchasePrice: '2.765.000',

      salePrice: '3.050.000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 11 Pro max' ,

      description: 'El Apple iPhone 11 Pro Max cuenta con pantalla Super Retina XDR de 6.5 pulgadas. El iPhone 11 Pro Max está potenciado por un procesador A13 Bionic de Apple, con almacentamiento de 64GB. Su cámara trasera es triple, de 12 MP + 12 MP + 12 MP integrando zoom óptico, gran angular y estabilización óptica de imagen, mientras que su cámara selfie es de 12 MP y ayuda al reconocimiento de rostro con Face ID. El resto de las características incluyen parlantes stereo, resistencia al agua IP68, batería de carga rápida y sonido Dolby Atmos.',

      processor: 'Apple A13 Bionic 7nm',

      ram: '4GB',

      memory: '64/256GB',

      status:  'Usado',

      discount: '0',

      purchasePrice: '2.350.000',

      salePrice: '2.689.900',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone 11 ' ,

      description: 'El Apple iPhone 11 cuenta con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. El iPhone 11 cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad.',

      processor: 'Apple A13 Bionic 5nm, Hexa-core 2x2.65 GHz Lightning + 4x1.8 GHz Thunder',

      ram: '4GB',

      memory: '64/128GB ',

      status:  'Usado',

      discount: '0',

      purchasePrice: '1.765.000',

      salePrice: '2.249.000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone XR ' ,

      description: 'El iPhone XR tiene una pantalla LCD de 6.1 pulgadas de borde a borde con notch incluido y resolución Retina. El iPhone Xr está potenciado por el procesador A12 Bionic con 64GB de almacenamiento interno, y cuenta con una cámara de 12 megapixels, cámara frontal de 7 megapixels, carga inalámbrica y certificación IP67 a prueba de agua, disponible en una variedad enorme de colores.',

      processor: 'Apple A12 Bionic 5nm, Hexa-core 2X2.5 GHz Vortex + 4X1.6 GHz Tempest',

      ram: '4GB',

      memory: '64/128/256GB ',

      status:  'Usado',

      discount: '0',

      purchasePrice: '1.300.000',

      salePrice: '1.549.000',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Iphone X ' ,

      description: ' El iPhone X cuenta con una pantalla de 5.8 pulgadas que abarca todo el frente del teléfono, dejando un espacio arriba para acomodar todos los sensores que contribuyen a Face ID, el nuevo método de desbloqueo por rostro, ya que el botón Touch ID desaparece. Con una atípica resolución de 2436 x 1125 pixels, acomoda 458ppi. La cámara es dual de 12 MP similar a la del iPhone 8, es resistente al agua y corre iOS 11.',

      processor: 'Apple A11 Bionic 5nm',

      ram: '3GB',

      memory: '64/256GB ',

      status:  'Usado',

      discount: '0',

      purchasePrice: '1.100.000',

      salePrice: '1.399.900',

      categories_id: '1',

      brands_id: '4',
    },

    {
      name: 'Samsung Galaxy Z Fold 4 ' ,

      description: ' el Samsung Galaxy Z Fold 4 cuenta con una pantalla interior AMOLED 2x dinámica de 7,6" con una resolución QXGA+ de 1812 x 2176 píxeles y una capa de cristal UTG ultrafina. Con una frecuencia de refresco adaptativa de 120 Hz, consigues una suavidad sin igual y una inmersión total en tus contenidos favoritos.',

      processor: 'Qualcomm SM8475 Snapdragon 8+ Gen 1/4nm',

      ram: '12GB',

      memory: '256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '6.139.900',

      salePrice: '6.649.900',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy Z Flip 4 ' ,

      description: 'Con una pantalla AMOLED de 6.7 pulgadas a resolución FHD+ y tasa de refresco de 120Hz al estar abierto, el Galaxy Z Flip 4 tiene una pantalla cover de 1.9 pulgadas para notificaciones y atajos. Potenciado por un procesador Qualcomm Snapdragon 8+ Gen 1, el Galaxy Z Flip4 cuenta con 8GB de RAM y hasta 512GB de almacenamiento interno.',

      processor: 'Qualcomm Snapdragon 8+ Gen 1 a 3,18 GHz-Octa-core',

      ram: '8GB',

      memory: '256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3.799.900',

      salePrice: '3.500.000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy S23 Ultra ' ,

      description: 'Descubre el Galaxy S23 Ultra, con la potencia del Note. Fino y atrevido, con un marco pulido que rodea la forma extruida para lograr una elegante simetría. Y la cámara lineal, realzada por los aros de la lente de espejo, parece flotar. Por fin ha ocurrido: Galaxy S y S Pen son compatibles. Escribe, dibuja y controla tu móvil con tan solo sacarlo de su parte inferior.',

      processor: 'Qualcomm Snapdragon 8+ Gen 1 a 3,18 GHz-Octa-core',

      ram: '12GB',

      memory: '256/512GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '5.800.900',

      salePrice: '5.480.000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy S23  ' ,

      description: 'Este smartphone te cautiva con su diseño, el modulo de cámara cuenta con un diseño exclusivo y su tamaño de 6.1" en su display avanzado, te ofrece máxima portabilidad en un diseño compacto y con materiales sostenibles. La cámara de este modelo te ofrece selfies, retratos y videos nítidos, libres de ruido y con el mayor brillo, cuando capturas en la noche',

      processor: 'Qualcomm SM8550-AC Snapdragon 8 Gen 2,4 nm',

      ram: '8GB',

      memory: '256 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '4.180.900',

      salePrice: '4.520.000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy Note 20 Ultra ' ,

      description: 'Equipado con una revolucionaria pantalla curva Quad HD+ de 6.9", el  Samsung Galaxy Note 20 Ultra combina potencia, conectividad, elegancia y facilidad de uso en un solo teléfono inteligente. Alberga un procesador Exynos. 990 Octa-Core sincronizados a 2,73 GHz, 12 GB de RAM y una capacidad de almacenamiento de 256GB. Y con su cámara de triple sensor de 108+12+12MP toma hermosas fotos.',

      processor: 'Cortex-A55 Exynos 990 7 nm ',

      ram: '12GB',

      memory: '256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3.799.900',

      salePrice: '3.950.000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy A54 ' ,

      description: '¡Descubra el Samsung Galaxy A54 5G 128gb | 6gb y disfrute de un celular de última generación al mejor precio! Con su cámara principal triple de 50MP, 12MP y 5MP y su cámara Selfie de 32MP, ¡captura los mejores momentos con la más alta calidad! ¿Estás preparado para la experiencia?',

      processor: 'Exynos 1380 5 nm -Octa-core 4x2.4 GHz ',

      ram: '6GB',

      memory: '128GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.669.900',

      salePrice: '1.850.000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy A53 ' ,

      description: 'El Galaxy A53 5G cuenta con una pantalla Super AMOLED Infinity-O de 6,5" con resolución Full HD+ de 1080 x 2400 píxeles. Podrás disfrutar de tus vídeos en Full HD, de tus fotos en tamaño extra grande, y navegar por Internet con una comodidad excepcional, todo ello manteniendo una impresionante reproducción y respeto de los colores. Y con una frecuencia de refresco de 120 Hz, disfrutarás de una experiencia más cómoda y fluida.',

      processor: 'Exynos 1280 5 nm Octa-core 2x2.4 GHz Cortex-A78 ',

      ram: '6GB',

      memory: '128GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.260.000',

      salePrice: '1.479.900',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy A34 ' ,

      description: 'El Samsung Galaxy A34 5G 256gb | 8gb es el celular ideal para un uso intenso. Su pantalla Amoled da una experiencia visual única, y su gran capacidad de almacenamiento 256gb y 8gb de RAM permiten disfrutar de la mejor experiencia. ¡Tranquilidad, rapidez y comodidad al alcance de tu mano!',

      processor: 'Octa-core 2x2.6 GHz Cortex-A78 y 6x2.0 GHz Cortex-A55',

      ram: '8GB',

      memory: '128/256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.380.000',

      salePrice: '1.600.000',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy A33 ' ,

      description: 'El Samsung Galaxy A33 5G maneja cuatro cámaras de 48+8+5+2 MP para ofrecerte fotos nítidas y claras de día o de noche. Utiliza el objetivo ultra gran angular de 8MP para capturar la vista más amplia posible, Con cámara frontal de 13 MP, tus selfies serán de una calidad inigualable.',

      processor: 'Octa-core 2x2.4 GHz Cortex-A78 y 6x2.0 GHz',

      ram: '6GB',

      memory: '128/256GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.000.000',

      salePrice: '1.139.900',

      categories_id: '1',

      brands_id: '2',
    },

    {
      name: 'Realme C35 ' ,

      description: 'REALME C35 un producto de alto performance, con características de alta gama como carga inversa que permite cargar otro teléfono, cámaras 50 MPX + 8MPX para fotografías de una calidad impresionante, adicional su increíble pantalla DE 6.56" permite una mejor visualización con un diseño ergonómico y que da mas amplitud visual, batería de LiPo de 5000 mAh, que te permite mas tiempo de uso sin estar recargando constantemente',

      processor: 'Octa-core 2x2.0 GHz Cortex-A75 y 6x1.8 GHz',

      ram: '4GB',

      memory: '128GB ',

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

      ram: '3/4GB',

      memory: '32/64GB ',

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

      ram: '2/3GB',

      memory: '32/64GB ',

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

      ram: '2/3GB',

      memory: '32/64GB ',

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

      memory: '128GB ',

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

      memory: '128GB ',

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

      memory: '128/256GB',

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

      memory: '128/512GB',

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

      memory: '128/256GB',

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

      memory: '256GB/512GB',

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

      memory: '128/256GB',

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

      memory: '128GB ',

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

      memory: '128/256GB ',

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

      memory: '128/256GB ',

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

      memory: '128/256GB ',

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

      memory: '64/128GB',

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

      memory: '64/128GB',

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

      memory: '64/128GB',

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

      memory: '128/256GB',

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

    {
      name: 'Monitor Samsung Curve 32" ' ,

      description: 'Cómoda e inmersiva experiencia de visualización con la pantalla curva,diseño increíblemente delgado y elegante con pantalla sin bisel, resolucion de 1920x1080 y una tasa de refresco de 75Hz,juego suave con AMD Freesync y modo de juego. producto con una garantia directa con Samsung por 36 meses',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.090.900',

      salePrice: '1.259.900',

      categories_id: '4',

      brands_id: '2',
    },

    {
      name: 'Samsung Galaxy Book " ' ,

      description: 'Pantalla AMOLED. Con el elegante Galaxy Book, Samsung combina una gran calidad de construcción con una serie de características deseables. El rendimiento del convertible y el S Pen lo convierten en una buena opción para las tareas de productividad diarias a pesar de su delgado diseño.',

      processor: 'Intel Core i5 Séptima Generación 2 nucleos',

      ram: '8GB',

      memory: '128/256 GB ',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '5.690.900',

      salePrice: '6.700.000',

      categories_id: '2',

      brands_id: '2',
    },

    {
      name: 'Apple Macbook Air ' ,

      description: 'El MacBook Air M2 viene con una nueva pantalla. Apple la llama Liquid Retina Display. Es ligeramente más grande que el MacBook Air M1 —13,6 versus 13,3 pulgadas—, con una resolución prácticamente igual —2560 x 1664 versus 2560 x 1600—, pero con mayor brillo: 500 nits cuando antes eran 400 nits.',

      processor: 'Core i5-5250U de Intel Nc2 a 1.6 GHz',

      ram: '4GB',

      memory: '128GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '4.190.900',

      salePrice: '4.600.000',

      categories_id: '2',

      brands_id: '4',
    },

    {
      name: 'Apple SmartBook A+' ,

      description: 'El Smartbook es nuestro ordenador de alta calidad. Se destaca por la rapidez de su CPU al ser potencializado por 4 núcleos diferentes. Tiene tarjeta gráfica HD incorporada y una batería 7.4v 5.000 mAh lo que asegura una alta duración CPU: Intel Celeron J4105, Quad Core, 4 hilos Tarjeta gráfica: Gráficos integrados Gráficos Intel HD Pantalla: 15,6 pulgadas LCD 16:9, resolución 1920*1080 Sistema operativo: Windows 10 Cámara: 0,3 M (cámara inteligente 1080p)Bluetooth: Bluetooth 4.0 Disco SSD: 256GB Wi-Fi: 802.11 b/g/n LAN: con interfaz RJ45 Ranura: 3x USB3.0, 1x Mic, 1x conector de audio de 3,5 mm, 1x entrada de CC, 1x HDMI, 1x tarjeta TF Batería: batería de polímero de iones de litio 7.4v 5000mAh Alimentación: CA 90-240 V 50/60 Hz; CC 12 V 2,5 A/3 A, 3,5 mm Altavoz: Altavoces estéreo duales incorporados Dimensión: 371*239*22mm Peso: 1,57 kg',

      processor: 'Intel Celeron J4105',

      ram: '8GB',

      memory: '256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.350.000',

      salePrice: '1.810.000',

      categories_id: '2',

      brands_id: '4',
    },

    {
      name: 'Hp Notebook 240 G7' ,

      description: 'Conéctese con el económico portatil empresarial HP 240 G7. Con la ultima tecnología y un chasis resistente que ayuda a proteger la notebook, Un rendimiento potente y una batería de larga duración mantienen la productividad empresarial. Seguridad y durabilidad para los profesionales de empresas en crecimiento que pasan del escritorio a la sala de reuniones y al hogar',

      processor: 'Intel Core i3-8130U/4n 2.20 GHz',

      ram: '4GB',

      memory: '128GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.230.000',

      salePrice: '1.589.800',

      categories_id: '2',

      brands_id: '14',
    },

    {
      name: 'Hp Notebook Pavilion G4' ,

      description: 'Un equilibrio perfecto de diseño, rendimiento y precio,La HP Pavilion g4-1363la ofrece un excelente equilibrio de rendimiento, diseño y recursos de productividad. Y usted obtiene exactamente por lo que paga: es por eso que es la opción número 1 de notebook PC para uso diario.',

      processor: 'Intel Core i3-2330M ',

      ram: '4GB',

      memory: '64GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '500.000',

      salePrice: '879.900',

      categories_id: '2',

      brands_id: '14',
    },

    {
      name: 'Lenovo IdeaPad 330 2019 Premiun' ,

      description: 'A veces es mejor seguir con las cosas sencillas. Equipado con un procesamiento superior y opciones gráficas avanzadas, la portátil Ideapad 330 es tan potente como fácil de usar. Pantalla Full HD IPS LED retroiluminada de 15,6 pulgadas (1920 x 1080), gráficos AMD Radeon Vega 8Procesador AMD 2500U quad-core 2.0 GHz (hasta 3.6GHz) con 4MB cach (Beat Intel i7-7500) 8GB DDR4 SDRAM para multitarea avanzada El disco duro SSD de 256 GB',

      processor: 'Intel® Core™ i7-7500U 4N 3.50 GHz',

      ram: '8GB',

      memory: '256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3.720.900',

      salePrice: '4.571.900',

      categories_id: '2',

      brands_id: '15',
    },

    {
      name: 'Apple SmatPad A+' ,

      description: 'Tamaño de la pantalla: 10 pulgadas Os: Android 8.1 Pantalla táctil: Pantalla táctil capacitiva, G+G Resolución: IPS 1280X800 Capacidad de la batería: 6000 mAh Wi-fi: 2.4GHz &5GHz 802.11 ac/a/b/g/n Bluetooth: V4.0 Tarjeta Sim: Soporte de banda 2G&3G/4G LTE:B2/B3/B4/B5/B7/B8/B28A Cámara: Frontal 2MP/Trasera 5MP Altavoz y micrófono: Altavoz y micrófono incorporados Ranura de conexión: Doble tarjeta sim, Tipo C-USB.3.5 mm Jack, Cargador, cable USB, cable OTG, funda de silicona, pantalla, protector, pines para la tarjeta SIM y adaptadores para la SIM Color: Plata',

      processor: 'Apple A13 Bionic',

      ram: '2GB',

      memory: '128GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '700.000',

      salePrice: '825.000',

      categories_id: '3',

      brands_id: '4',
    },

    {
      name: 'Apple  iPad Air 5' ,

      description: 'Apple iPad Air 2022,también conocido como iPad Air de 5ta generación o iPad Air 5 llega renovada con procesador Apple A15. Manteniendo la pantalla de 10.9 pulgadas Retina, el iPad Air 2022 cuenta con cámara dorsal de 12MP y cámara frontal de 12MP, wide y ultrawide respectivamente, parlantes stereo, lector de huellas, opciones de almacenamiento de 64GB o 256GB, soporte para Apple Pencil de segunda generación y conectividad 5G',

      processor: 'Apple A15 Bionic',

      ram: '8GB',

      memory: '64/256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '2.927.000',

      salePrice: '3.350.000',

      categories_id: '3',

      brands_id: '4',
    },

    {
      name: 'Apple iPad Mini 6' ,

      description: 'Apple iPad mini (2021) llega este año con una actualización de su hardware que incluye una pantalla Liquid Retina más grande de 8.3 pulgadas. Potenciado por un procesador Apple A15 Bionic, el iPad mini está disponible en versiones de 64GB o 256GB de almacenamiento y cuenta con cámaras de 12MP al frente (ultrawide) y atrás (wide). El nuevo iPad mini cuenta con puerto USB-C, lector de huellas lateral, parlantes stereo, y soporta Apple Pencil hasta su segunda generación.',

      processor: 'Apple A15 Bionic',

      ram: '8GB',

      memory: '64/256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '2.124.000',

      salePrice: '2.640.900',

      categories_id: '3',

      brands_id: '4',
    },

    {
      name: 'Lenovo Tab P12 Pro' ,

      description: 'Se trata de una tablet con una enorme pantalla 2K a 120 Hz, el procesador Snapdragon 870 y compatibilidad con el Precision Pen 3 de Lenovo. Una tablet, en definitiva, pensada para consumo multimedia, para productividad y, por qué no, para echarse alguna que otra partida.',

      processor: 'Qualcomm® Snapdragon™ 870 Processor (3.20 GHz )',

      ram: '8GB',

      memory: '256GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '5.243.900',

      salePrice: '5.999.000',

      categories_id: '3',

      brands_id: '15',
    },

    {
      name: 'Lenovo Yoga 13' ,

      description: 'Combinando la productividad de una Ultrabook™, con la experiencia táctil de una tablet, la Yoga de 13,3” es lo último en versatilidad. con una calidad de imagen 2K a través de Dolby Visión ™. y su audio cinematográfico Dolby Atmos® con cuatro altavoces JBL. Obtén una mayor productividad con doble pantalla. El práctico puerto micro-HDMI transforma tu Tablet en una segunda pantalla para tu laptop, Juega sin parar gracias su batería de larga duración que recarga en poco tiempo. lleva la tuya ahora!',

      processor: 'Qualcomm® Snapdragon™ 870 Processor (3.20 GHz )',

      ram: '8GB',

      memory: '128GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '2.521.000',

      salePrice: '2.899.900',

      categories_id: '3',

      brands_id: '15',
    },

    {
      name: 'Manilla Apple Watch' ,

      description: 'Hecho con material de primera calidad para lograr un color vibrante que nunca se desvanece. El material de silicona recubierto de goma personalizado da como resultado una correa resistente, duradera e impermeable que se siente súper suave en su muñeca. No se necesitan adaptadores!',

      processor: '',

      ram: '',

      memory: '',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '37.000',

      salePrice: '50.000',

      categories_id: '9',

      brands_id: '4',
    },

    {
      name: 'Estuche Protector Airpods' ,

      description: 'Hecho con material de primera calidad para lograr un color vibrante que nunca se desvanece. El material de silicona recubierto de goma personalizado da como resultado un estuche, duradero e impermeable para proteger tus Airpods en todo momento',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '12.500',

      salePrice: '25.000',

      categories_id: '9',

      brands_id: '4',
    },

    {
      name: 'PopSocket Celulares' ,

      description: 'Diseños únicos e intercambiables que se adaptan a tu estilo y personalidad. Los accesorios originales para tu teléfono, mejor agarre y mayor comodidad',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '11.500',

      salePrice: '21.000',

      categories_id: '9',

    },

    {
      name: 'Soporte Fijador Electromecanico para carro' ,

      description: 'este tipo de soporte tiene un sensor de movimiento integrado. Fijaciones del soporte se abren automáticamente cuando usted acerca la mano con teléfono y se cierran después de colocar el teléfono. Con frecuencia los soportes con fijador automático poseen un cargador inalámbrico integrado. Cabe notar que este tipo de soportes requiere alimentación eléctrica y, por lo tanto, ellos todo el tiempo deben permanecer conectados al encendedor.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '36.900',

      salePrice: '52.000',

      categories_id: '9',

    },

    {
      name: 'Cable Iphone USB 2M' ,

      description: 'Este cable USB 2.0 de 2 metros conecta tu iPhone, iPad o iPod con conector Lightning al puerto USB-A del ordenador para sincronizarlo o cargarlo, o al Adaptador de corriente USB-A para cargarlo con comodidad en una toma de pared. LA CAJA CONTIENE: Cable Lightning a USB (2 m) de Apple',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '99.500',

      salePrice: '135.000',

      categories_id: '6',

      brands_id: '4',
    },

    {
      name: 'Cabezote iPhone Carga Rapida' ,

      description: 'el cabezote iPhone Carga Rápida (20W) es un accesorio imprescindible para los propietarios de dispositivos iPhone que desean aprovechar al máximo la velocidad de carga. Con su potencia de 20W, diseño compacto y protecciones de seguridad, este cabezote te brinda una experiencia de carga rápida y segura para tu iPhone en cualquier momento y lugar.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '62.500',

      salePrice: '85.000',

      categories_id: '6',

      brands_id: '4',
    },

    {
      name: 'Cargador Completo iPhone USB' ,

      description: 'El Cargador Completo iPhone USB es un dispositivo de carga diseñado específicamente para los dispositivos iPhone. Con una potencia de salida de hasta 12W, ofrece una carga normal y eficiente. Cuenta con un cable USB de alta calidad y un adaptador de corriente compacto, lo que lo hace fácil de transportar. Además, incorpora tecnología de protección contra sobrecargas y cortocircuitos para garantizar la seguridad de tus dispositivos.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '82.500',

      salePrice: '105.000',

      categories_id: '6',

      brands_id: '4',
    },

    {
      name: 'Cargador Apple MagSafe' ,

      description: 'El Cargador Apple MagSafe es un cargador inalámbrico diseñado específicamente para dispositivos Apple. Utiliza imanes para alinear de manera precisa el cargador con el dispositivo, lo que permite una carga rápida y segura. Tiene una potencia de hasta 15W y es compatible con modelos de iPhone 12 y versiones posteriores. Además, cuenta con la función de carga inversa, lo que te permite cargar otros dispositivos compatibles con Qi colocándolos en la parte trasera del cargador.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '175.500',

      salePrice: '205.000',

      categories_id: '6',

      brands_id: '4',
    },

    {
      name: 'Cargador Rapido Completo Samsung' ,

      description: 'El Cargador Rápido Completo Samsung es una solución eficiente y confiable para cargar tus dispositivos. Con una potencia de carga rápida, proporciona una carga rápida y segura en un tiempo reducido. Diseñado por Samsung, garantiza la compatibilidad y la calidad que esperas de la marca.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '91.500',

      salePrice: '110.000',

      categories_id: '6',

      brands_id: '2',
    },

    {
      name: 'Cargador Tipo C Android Generico' ,

      description: 'El Cargador Tipo C Android Genérico es una opción versátil y económica para cargar dispositivos Android con puerto tipo C. Su diseño genérico asegura la compatibilidad con una amplia gama de dispositivos Android.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '28.500',

      salePrice: '40.000',

      categories_id: '6',

    },

    {
      name: 'Power Bank Apple' ,

      description: 'El Power Bank Apple es una solución portátil de carga confiable diseñada específicamente para dispositivos Apple. Con una capacidad de batería de larga duración, ofrece carga rápida y segura para tus dispositivos en cualquier lugar. Su diseño elegante y compacto lo convierte en el compañero perfecto para estar siempre conectado',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '289.500',

      salePrice: '398.000',

      categories_id: '6',

      brands_id: '4',
    },

    {
      name: 'Apple AirPods Serie 2' ,

      description: 'Los Apple AirPods Serie 2 Nuevo son unos auriculares inalámbricos de alta calidad y rendimiento. Ofrecen una experiencia de audio envolvente y una conexión inalámbrica estable con dispositivos Apple. Además, cuentan con comandos táctiles y una duración de batería extendida para disfrutar de tu música favorita sin interrupciones.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '681.500',

      salePrice: '768.000',

      categories_id: '7',

      brands_id: '4',
    },

    {
      name: 'Apple AirPods Serie 3' ,

      description: 'Los Apple AirPods Serie 3, son auriculares inalámbricos de última generación con un diseño elegante y mejorado. Ofrecen una calidad de sonido excepcional y una conexión rápida y estable con dispositivos Apple. Además, cuentan con funciones mejoradas como cancelación de ruido y una duración de batería prolongada para una experiencia auditiva inmersiva y sin interrupciones.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '881.500',

      salePrice: '1.000.000',

      categories_id: '7',

      brands_id: '4',
    },

    {
      name: 'Apple AirPods Pro' ,

      description: 'Los Apple AirPods Pro son auriculares inalámbricos de gama alta con cancelación activa de ruido. Ofrecen un sonido envolvente y personalizable, adaptándose a tus preferencias auditivas. Además, cuentan con un diseño ergonómico y resistente al agua, brindando comodidad y durabilidad en cualquier situación.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '971.500',

      salePrice: '1.150.000',

      categories_id: '7',

      brands_id: '4',
    },


    {
      name: 'Apple Earpods' ,

      description: 'Los Apple EarPods son auriculares con cable diseñados por Apple, ofreciendo una experiencia auditiva de alta calidad. Con un diseño ergonómico, brindan comodidad durante su uso prolongado. Son compatibles con una amplia gama de dispositivos Apple y cuentan con un control remoto integrado para un fácil manejo de la reproducción de audio.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '71.500',

      salePrice: '100.000',

      categories_id: '7',

      brands_id: '4',
    },

    {
      name: 'Apple Watch SE 2022' ,

      description: 'Tres colores con mucho estilo. Poderosos sensores que te mantienen al día sobre tu salud y estado físico. Innovadoras funcionalidades de seguridad. Muchas formas de seguir conectado. Y un procesador más rápido de doble núcleo que hace todo volando. El Apple Watch SE está en su mejor momento y está más a tu alcance que nunca.',

      processor: 'Apple S8 2X Thunder a 1.8 GHz',

      ram: '0.5GB',

      memory: '32GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.123.500',

      salePrice: '1.300.000',

      categories_id: '7',

      brands_id: '4',
    },

    {
      name: 'Apple Watch Serie 8' ,

      description: 'La pantalla Retina siempre encendida de borde a borde es brillante en todos los sentidos, con un color y una claridad increíbles. Las esferas del reloj son más brillantes y fáciles de leer, incluso cuando la muñeca está baja.',

      processor: 'Apple S8 Dual-core',

      ram: '1GB',

      memory: '32GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '1.923.500',

      salePrice: '2.100.000',

      categories_id: '7',

      brands_id: '4',
    },

    {
      name: 'Apple Watch Ultra' ,

      description: 'Diseñado para la exploración, la aventura y los deportes de resistencia. Con una caja de 49 mm fabricada con titanio de calidad aeroespacial, batería para varios días, apps especializadas que trabajan en equipo con los sensores avanzados y un nuevo Botón de Acción personalizable.',

      processor: 'Apple S8 SiP 1.8 GHz',

      ram: '1GB',

      memory: '32GB',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '3.913.500',

      salePrice: '4.280.000',

      categories_id: '7',

      brands_id: '4',
    },

    {
      name: 'Xiaomi Redmi Airdots' ,

      description: 'Los Xiaomi Redmi Airdots Cuentan con controladores dinámicos de 7.2 mm que brindan un sonido de alta calidad con graves profundos y agudos claros. Además, ofrecen hasta 4 horas de reproducción continua y vienen con un estuche de carga que proporciona una duración total de batería de hasta 12 horas. Su diseño compacto y ligero los hace ideales para su uso en actividades deportivas y diarias.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '88.000',

      salePrice: '120.000',

      categories_id: '7',

      brands_id: '1',
    },

    {
      name: 'Audifonos i12' ,

      description: 'Los audífonos i12 son auriculares inalámbricos que se conectan a dispositivos mediante Bluetooth 5.0, brindando una conexión estable y de bajo consumo de energía. Cuentan con control táctil para controlar funciones como reproducción de música, llamadas y asistentes de voz. Además, los i12 tienen un estuche de carga que proporciona una duración total de batería de hasta 4 horas de reproducción continua y se recargan fácilmente en su estuche compacto.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '29.900',

      salePrice: '50.000',

      categories_id: '7',

    },

    {
      name: 'Samsung Galaxy Buds 2' ,

      description: 'Los Samsung Galaxy Buds 2 Cuentan con controladores de altavoces de 2 vías y sonido envolvente AKG, brindando una experiencia de audio inmersiva y de alta calidad. Además, ofrecen cancelación activa de ruido para bloquear el ruido ambiental no deseado y permiten ajustar el nivel de transparencia para escuchar el entorno. Con una duración de batería de hasta 7.5 horas y resistencia al agua y al sudor IPX2, son ideales para uso diario y actividades deportivas.',

      status:  'Nuevo',

      discount: '0',

      purchasePrice: '479.900',

      salePrice: '512.000',

      categories_id: '7',

      brands_id: '2',
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
