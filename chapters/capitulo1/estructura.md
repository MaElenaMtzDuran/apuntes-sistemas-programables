---
icon: rotate
---

# 1.2 Circuitería alternativa para entrada/salida

### 2.1 Generalidades.

El uso de microcontroladores en el ámbito académico universitario es fundamental para la enseñanza de **arquitecturas de cómputo, lenguajes de interfaz y sistemas embebidos**. Estos dispositivos, definidos como computadoras completas en un solo chip de silicio, permiten interactuar con el mundo físico mediante sensores y actuadores. La cantidad de microcontroladores que se encuentran en el mercado es amplia, por lo que a continuación se presenta un análisis de los principales microcontroladores que se utilizan en el ambito académico. Los microcontroladores más utilizados en las universidades se seleccionan por su **bajo costo, amplia documentación y facilidad de programación**. Se utilizarán como referencia las hojas técnicas de cada uno de ellos (data sheet)

#### **Familia PIC (Microchip Technology)**

Es históricamente la familia más difundida en cursos de ingeniería debido a su arquitectura **Harvard y procesador RISC**.

*   **PIC16F84A:** Aunque considerado obsoleto industrialmente, sigue siendo un referente académico por su simplicidad (35 instrucciones) y 18 pines. Posee **1 KB de memoria Flash**, 68 bytes de RAM y 13 líneas de E/S. ([https://ww1.microchip.com/downloads/en/DeviceDoc/35007b.pdf](https://ww1.microchip.com/downloads/en/DeviceDoc/35007b.pdf))&#x20;

    <figure><img src="../../.gitbook/assets/Imagen21b PIC16F84A.jfif" alt="" width="200"><figcaption><p>Figura 1.2.1 Encapsulado PIC16F84A</p></figcaption></figure>
*   **PIC16F628A:** Un recambio común del anterior, ofrece **oscilador interno** (eliminando la necesidad de cristales externos en prácticas básicas) y comparadores analógicos. ([https://ww1.microchip.com/downloads/en/DeviceDoc/40044G.pdf](https://ww1.microchip.com/downloads/en/DeviceDoc/40044G.pdf))

    <figure><img src="../../.gitbook/assets/Imagen21c PIC16F628A.webp" alt="" width="170"><figcaption><p>Figura 1.2.2 Encapsulado PIC16F628A</p></figcaption></figure>
*   **PIC18F4550:** Utilizado en cursos avanzados por su módulo **USB integrado** y mayor capacidad de memoria para proyectos de adquisición de datos. ([https://ww1.microchip.com/downloads/en/devicedoc/39632e.pdf](https://ww1.microchip.com/downloads/en/devicedoc/39632e.pdf))

    <figure><img src="../../.gitbook/assets/Imagen21d pic18f4550-microcontrolador-8-bits (1).webp" alt="" width="188"><figcaption><p>Figura 1.2.3 Encapsulado PIC18F4550</p></figcaption></figure>

#### **Familia AVR (Atmel/Microchip)**

Ganó popularidad masiva gracias a la plataforma Arduino.

*   **ATMega328P:** Es el estándar actual. Posee un rendimiento superior a los PIC de gama media, con **32 KB de Flash**, 2 KB de SRAM y soporte para hasta 6 señales PWM simultáneas. Su arquitectura permite la programación tanto en **Ensamblador como en Lenguaje C** de forma eficiente. ([https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P\_Datasheet.pdf](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf))

    <figure><img src="../../.gitbook/assets/images21a Atmega328P.jfif" alt=""><figcaption><p>Figura 1.2.4 Encapsulado ATMega328P</p></figcaption></figure>

#### **Familia STM32 (STMicroelectronics)**

Representa la evolución hacia los **32 bits** en el área académica.

*   **STM32F103C8 (Blue Pill):** Basado en el núcleo **ARM Cortex-M3**, opera a 72 MHz con 64 KB de Flash y 20 KB de SRAM. Es ideal para introducir a los estudiantes en sistemas de alto rendimiento e **Internet de las Cosas (IoT)**. ([https://www.st.com/resource/en/datasheet/stm32f103c8.pdf](https://www.st.com/resource/en/datasheet/stm32f103c8.pdf))

    <figure><img src="../../.gitbook/assets/Imagen21e stm32f103c8t6-micro-controller.jpg" alt="" width="188"><figcaption><p>Figura 1.2.5 Encapsulado STM32F103C8</p></figcaption></figure>

***

#### Diagramas y Estructura Funcional

**Diagrama de Bloques General**

Todos estos dispositivos comparten una organización interna típica que incluye:

1. **CPU (ALU y Unidad de Control):** Administra las actividades del chip y ejecuta instrucciones.
2. **Memoria Interna:** Flash para el programa, RAM para datos volátiles y EEPROM para datos permanentes.
3. **Puertos I/O:** Pines configurables para recibir señales de sensores o enviar órdenes a actuadores.
4. **Reloj (Oscilador):** Sincroniza todas las operaciones internas.
5. **Periféricos:** Temporizadores (Timers), Conversores A/D y módulos de comunicación (UART, I2C, SPI).

<figure><img src="../../.gitbook/assets/Imagen21 DiagramaBloquesGeneral mC.png" alt=""><figcaption><p>Figura 1.2.6 Diagrama de bloques general de un microcontrolador</p></figcaption></figure>

**Esquemas de Conexión y Chips**

Físicamente, los microcontroladores académicos suelen presentarse en encapsulados **DIP (Dual In-line Pin)** para facilitar su uso en protoboards.

* **Conexión Básica:** Un microcontrolador funcional requiere típicamente la conexión de alimentación (Vcc/GND), un circuito de **Reset (MCLR)** con una resistencia de pull-up, y en algunos casos, un **cristal de cuarzo** con capacitores para el oscilador.

***

#### Plataforma Abierta Arduino

Arduino es un ecosistema que combina hardware abierto, un entorno de desarrollo (IDE) y una comunidad global. Su objetivo es permitir el desarrollo rápido de prototipos sin requerir conocimientos profundos iniciales de los registros del microcontrolador.

Para el desarrollo de esta documentación se adopta **Arduino** como microcontrolador y ecosistema de trabajo por las siguientes razones verificables:



1. **Hardware abierto y documentado.** Arduino publica esquemáticos, archivos CAD y código fuente bajo licencias abiertas; la placa de referencia usada en este documento es la Arduino Uno Rev3 ([Arduino](https://store-usa.arduino.cc/products/arduino-uno-rev3)).
2.   **Microcontrolador coherente con la teoría ya desarrollada**. La Arduino Uno Rev3 usa el ATmega328P (Microchip/Atmel, 8 bits, arquitectura Harvard modificada) (Arduino,   \
   especificaciones técnicas de la UNO Rev3; Microchip/Atmel, ATmega328P Data Sheet).   \
   Curva de aprendizaje reducida sin abandonar el hardware real. El Arduino IDE compila, enlaza   \
   y descarga el programa mediante el bootloader residente por USB, sin necesitar un   \
   programador ICSP independiente para el uso básico, lo que agiliza el ciclo editar-compilarprogramar   \
   en sesiones de laboratorio con muchos equipos (Arduino IDE Documentation).   \
   Costo y disponibilidad. Existen múltiples distribuidores y clones compatibles de bajo costo, y   \
   el diseño abierto permite reproducir o reparar placas sin depender de un proveedor único.   \
   Ecosistema y comunidad. Bibliotecas oficiales y de terceros para LCD, sensores,   \
   comunicación y motores reducen el tiempo de integración, documentadas en la referencia   \
   oficial del lenguaje (Arduino, Language Reference).
3.

**Los Tres Principales Productos**

1. **Arduino UNO:**
   * **Chip:** ATMega328P.
   * **Características:** Es la placa estándar para educación. Posee **14 entradas/salidas digitales** y 6 entradas analógicas. Incluye un adaptador USB a TTL (generalmente un chip ATMega16U2) que facilita la carga de programas desde una PC.
2. **Arduino Mega 2560:**
   * **Chip:** ATMega2560.
   * **Características:** Diseñada para proyectos complejos. Ofrece **54 pines digitales** y **16 entradas analógicas**, además de 4 puertos seriales (UART) por hardware, lo que la hace ideal para robótica e impresoras 3D.
3. **Arduino Nano / Mini:**
   * **Chip:** ATMega328P.
   * **Características:** Versiones compactas destinadas a prototipos finales o espacios reducidos. La Nano incluye conexión USB directa, mientras que la Pro Mini requiere un adaptador externo para su programación, sacrificando conectividad por tamaño.

**Nota técnica:** Aunque Arduino facilita el diseño, en niveles académicos avanzados se recomienda que los estudiantes aprendan a manejar directamente los **registros I/O** (como DDRx, PORTx y PINx) para optimizar el uso de recursos y entender la arquitectura real del hardware.

2.2 Displays LED, LCD y otros dispositivos de visualización.\
2.3 Codificadores de posición.

