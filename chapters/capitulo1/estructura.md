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



1. **Hardware abierto y documentado.** Arduino publica esquemáticos, archivos CAD y código fuente bajo licencias abiertas; las placas de referencia utilizadas en el desarrollo de las actividades prácticas en este documento son: Arduino Uno Rev3 ([ArduinoUno](https://store-usa.arduino.cc/products/arduino-uno-rev3)), Arduino Mega 2560 Rev3 ([ArduinoMega](https://docs.arduino.cc/hardware/mega-2560/)).
2.   **Microcontrolador coherente con la teoría ya desarrollada**. La Arduino Uno Rev3 usa el ATmega328P (Microchip/Atmel, 8 bits, arquitectura Harvard modificada) ([ArduinoUno](https://store-usa.arduino.cc/products/arduino-uno-rev3)), mientras que la Arduino Mega 2560 Rev3 usa el ATmega2560 (Microchip/Atmel, 8 bits, arquitectura Harvard modificada)([ArduinoMega](https://docs.arduino.cc/hardware/mega-2560/)).
3.   **Curva de aprendizaje reducida sin abandonar el hardware real.** El **Arduino IDE** compila, enlaza y descarga el programa mediante el bootloader residente por USB, sin necesitar un programador ICSP independiente para el uso básico, lo que agiliza el ciclo editar-compilar-programar en sesiones de laboratorio con muchos equipos ([Arduino IDE Documentation](https://docs.arduino.cc/software/ide/)).
4.   **Costo y disponibilidad.** Existen múltiples distribuidores y clones compatibles de bajo costo, y el diseño abierto permite reproducir o reparar placas sin depender de un proveedor único.&#x20;
5. **Ecosistema y comunidad.** Bibliotecas oficiales y de terceros para LCD, sensores, comunicación y motores reducen el tiempo de integración, documentadas en la referencia oficial del lenguaje ([Arduino Language Reference](https://docs.arduino.cc/language-reference/)).

<details>

<summary><mark style="color:$danger;"><strong>Vamos al cine!!!</strong></mark></summary>

Para conocer un poco más del surgimiento de la plataforma abierta Arduino, se recomienda ver los siguientes videos:

* [Arduino The Documentary](https://https/www.youtube.com/watch?v=mltWc9_C9gs\&t=9s)

</details>

#### **Los tres principales productos de Arduino**

Los principales productos de la plataforma Arduino son:

<table data-search="false"><thead><tr><th width="154" valign="middle">Característica</th><th align="center">Arduino UNO</th><th align="center">Arduino MEGA 2560</th><th align="center">Arduino Nano/Mini</th></tr></thead><tbody><tr><td valign="middle">Microcontrolador </td><td align="center">ATmega328P</td><td align="center">ATMega2560</td><td align="center">ATMega328P</td></tr><tr><td valign="middle">Arquitectura</td><td align="center">AVR RISC de 8 bits</td><td align="center">AVR RISC de 8 bits</td><td align="center">AVR RISC de 8 bits</td></tr><tr><td valign="middle">Tensión de operación </td><td align="center">5 V</td><td align="center">5 V</td><td align="center">5 V</td></tr><tr><td valign="middle">Tensión de entrada recomendada </td><td align="center">7-12 V</td><td align="center">7-12 V</td><td align="center">7-12 V</td></tr><tr><td valign="middle">Pines digitales E/S </td><td align="center">14 (6 con salida PWM)</td><td align="center">54 (15 con salida PWM)</td><td align="center">14 (6 con salida PWM)</td></tr><tr><td valign="middle">Pines de entrada analógica</td><td align="center"> 6 (A0-A5, ADC de 10 bits)</td><td align="center">16</td><td align="center">8 (encapsulado TQFP)</td></tr><tr><td valign="middle">Puertos seriales</td><td align="center">1 (USART0)</td><td align="center">4 (USART0 a USART3)</td><td align="center">1 (USART0)</td></tr><tr><td valign="middle">Corriente máxima por pin de E/S </td><td align="center">20 mA</td><td align="center">20 mA</td><td align="center">20 mA</td></tr><tr><td valign="middle">Memoria Flash </td><td align="center">32 KB (0.5 KB usados por el bootloader)</td><td align="center">256 KB (8 KB usados por el bootloader)</td><td align="center">32 KB (0.5 KB usados por el bootloader)</td></tr><tr><td valign="middle">SRAM </td><td align="center">2 KB</td><td align="center">8 KB</td><td align="center">2 KB</td></tr><tr><td valign="middle">EEPROM </td><td align="center">1 KB</td><td align="center">4 KB</td><td align="center">1 KB</td></tr><tr><td valign="middle">Frecuencia de reloj </td><td align="center">16 MHz (resonador  cerámico)</td><td align="center"><br>16 MHz</td><td align="center">16 MHz</td></tr></tbody></table>

Las especificaciones técnicas del hardware se encuentran en:

* [Arduino UNO R3](https://docs.arduino.cc/hardware/uno-rev3/)
* [Arduino Mega 2560 Rev3](https://docs.arduino.cc/hardware/mega-2560/)
* [Arduino Nano](https://docs.arduino.cc/hardware/nano/)

<details>

<summary><mark style="color:$danger;"><strong>Tarjeta UNO R3: diagrama, pines y más...</strong></mark><img src="../../.gitbook/assets/Imagen23 ArduinoUnoA.png" alt=""></summary>

La tarjeta del Arduino Uno se puede encontrar en este formato:

<figure><img src="../../.gitbook/assets/Imagen23a ArduinoUno (1).png" alt=""><figcaption><p>Figura 1.2.7 Tarjeta Arduino UNO R3 (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf</a>)</p></figcaption></figure>

Las conecciones para los pines son las siguientes:

<figure><img src="../../.gitbook/assets/Imagen23b ArduinoUno DPines.png" alt=""><figcaption><p>Figura 1.2.8 Pines de la tarjeta Arduino UNO R3 (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf</a>)</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Imagen23c ArduinoUno DPinesAna.png" alt=""><figcaption><p>Figura 1.2.9 Descripción de los pines Analógicos (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf</a>)</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Imagen23d ArduinoUno DPinesDig.png" alt=""><figcaption><p>Figura 1.2.10 Descripción de los pines Digitales (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf</a>)</p></figcaption></figure>

En el Arduino Uno, el mapa de memoria de su microcontrolador PIC16F887 se encuentra distribuido de la siguiente forma:

*  **Memoria de programa** (Flash): 32 KB, de los cuales 0.5 KB los ocupa el bootloader de Arduino, dejando aproximadamente 31.5 KB disponibles para el sketch del usuario.
* **SRAM**: 2 KB para variables, pila y buffers en tiempo de ejecución.&#x20;
*  **EEPROM**: 1 KB no volátil, accesible en Arduino mediante la biblioteca <mark style="background-color:red;">EEPROM.h</mark> o, a nivel de registro, mediante <mark style="background-color:red;">EEDR</mark> , <mark style="background-color:red;">EEARL/EEARH</mark> y <mark style="background-color:red;">EECR</mark>.
*  **Puertos y registros GPIO**: el ATmega328P organiza sus pines en los puertos B, C y D; cada puerto tiene tres registros de 8 bits: <mark style="background-color:red;">DDRx</mark> (dirección: 1 = salida, 0 = entrada), <mark style="background-color:red;">PORTx</mark> (escritura de salida o activación de pull-up en entrada) y <mark style="background-color:red;">PINx</mark> (lectura del pin).
*  **Correspondencia pines Arduino ↔ puertos AVR** (según el esquemático oficial): D0-D7 ≈ <mark style="background-color:red;">PORTD</mark> (PD0-PD7), D8-D13 ≈ <mark style="background-color:red;">PORTB</mark> (PB0-PB5), A0-A5 ≈ <mark style="background-color:red;">PORTC</mark> (PC0-PC5).
*  **ADC**: 10 bits, controlado por <mark style="background-color:red;">ADMUX</mark> (selección de canal y referencia) y <mark style="background-color:red;">ADCSRA</mark> (habilitación, prescaler e inicio de conversión) — los mismos registros que subyacen a la función  \
  <mark style="background-color:red;">analogRead().</mark>
* **Temporizadores**: Timer0 (8 bits, usado internamente por <mark style="background-color:red;">millis() / delay()</mark> ), Timer1 (16 bits) y Timer2 (8 bits), cada uno con sus registros <mark style="background-color:red;">TCCRxA/B</mark> , <mark style="background-color:red;">TCNTx</mark> y máscaras de interrupción <mark style="background-color:red;">TIMSKx.</mark>

</details>

<details>

<summary><mark style="color:$danger;"><strong>Tarjeta Mega 2560 Rev3: diagrama,pines y más...</strong></mark><img src="../../.gitbook/assets/Imagen24 ArduinoMegaA (1).png" alt="" data-size="original"></summary>

La tarjeta del Arduino Mega 2560 Rev3 se puede encontrar en este formato:

<figure><img src="../../.gitbook/assets/Imagen24a ArduinoMegaA.png" alt=""><figcaption><p>Figura 1.2.11 Tarjeta Arduino Mega 2560 Rev3 (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf</a> )</p></figcaption></figure>

Las conecciones para los pines son las siguientes:

<figure><img src="../../.gitbook/assets/Imagen24b ArduinoMegaA DPines.png" alt=""><figcaption><p>Figura 1.2.12 Pines de la tarjeta Arduino Mega 2560 Rev3 (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf</a> )</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Imagen24b ArduinoMegaA DPinesAna.png" alt=""><figcaption><p>Figura 1.2.13 Descripción de los pines Analógicos (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf</a>)</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Imagen24b ArduinoMegaA DPinesDig1.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/Imagen24b ArduinoMegaA DPinesDig2.png" alt=""><figcaption><p>Figura 1.2.14 Descripción de los pines Digitales (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf</a>)</p></figcaption></figure>

Pines adicionales:

<figure><img src="../../.gitbook/assets/Imagen24b ArduinoMegaA DPinesDig2 PA1.png" alt=""><figcaption><p>Figura 1.2.15 Pines Adicionales (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf</a>)</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/Imagen24c ArduinoMegaA DPinesDig2 PA1.png" alt=""><figcaption><p>Figura 1.2.16 Descripción de los pines para ATMEGA16U2 JP5 (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf</a>)</p></figcaption></figure>

El puerto **JP5** es un conector secundario no soldado de 4 pines, directamente vinculado a los pines de entrada/salida de propósito general (GPIO) no utilizados del microcontrolador **ATmega16U2**.

En las placas oficiales Arduino Mega 2560 R3, este integrado se encarga exclusivamente de la traducción USB a Serial. Sin embargo, este puerto oculto te permite acceder y reprogramar funciones nativas del chip secundario.

Por defecto, estos pines no hacen nada porque el firmware de fábrica de Arduino solo los mantiene inactivos. Al soldar un header de pines en JP5 y modificar el firmware del ATmega16U2, se pueden usar para: \[[Rheingold Heavy](https://rheingoldheavy.com/arduino-from-scratch-part-8-atmega16u2-subsystem/), [Arduino Forum](https://forum.arduino.cc/t/discovered-a-16u2-secret-header-on-uno-and-mega-boards/233876)]

1. **Emulación de Dispositivos USB (HID):** Al instalar un firmware personalizado como [HoodLoader2 en GitHub](https://github.com/NicoHood/HoodLoader2/wiki/Arduino-Uno-Mega-16u2-Pinout), se transforma el chip en un dispositivo USB avanzado (Teclado, Ratón, Joystick o Controlador MIDI). Los pines de JP5 se convierten en entradas digitales físicas (botones o interruptores) para activar macros o comandos USB. \[[Arduino stack exchange](https://arduino.stackexchange.com/questions/49168/why-was-the-atmega16u2-used-on-the-arduino-uno-as-a-usb-to-serial-converter), [NicoHood](https://github.com/NicoHood/HoodLoader2/wiki/Arduino-Uno-Mega-16u2-Pinout), [Pasión Electrónica](https://pasionelectronica.com/pines-y-conectores-de-arduino-uno/), [Arduino Forum](https://forum.arduino.cc/t/discovered-a-16u2-secret-header-on-uno-and-mega-boards/233876)]
2. **Depuración y Control de Reset:** Puedes programar el chip para que un pin de JP5 actúe como un reset independiente para un Shield, evitando reiniciar la placa completa. \[[Arduino Forum](https://forum.arduino.cc/t/discovered-a-16u2-secret-header-on-uno-and-mega-boards/233876)]
3. **Procesamiento en Paralelo Extendido:** El ATmega16U2 es un procesador completo de 16 MHz. Puedes programarlo para realizar tareas en segundo plano (como lectura de sensores simples) liberando por completo de carga al microcontrolador principal (ATmega2560). \[[Ag Electrónica](https://agelectronica.lat/pdfs/textos/A/A000067.PDF), [Hetpro](https://hetpro-store.com/atmega16u2-au/?srsltid=AfmBOopXVCYc1ljHQc8ERTjhAipcE2LHLCJtOoP7OBJ2xuS62SSy_Mxg), [Reddit1](https://www.reddit.com/r/arduino/comments/fr3egr/how_to_use_these_jp2_pins_on_arduino_according_to/), [Reddit2](https://www.reddit.com/r/arduino/comments/m9xpad/what_are_the_male_headers_on_the_arduino_uno/)]

<figure><img src="../../.gitbook/assets/Imagen24c ArduinoMegaA DPinesDig2 PA2.png" alt=""><figcaption><p>Figura 1.2.17 Descripción de los pines para ATMEGA16U2 ICSP1 (Tomada de <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf">https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf</a>)</p></figcaption></figure>

El conector **ICSP1** en placas como Arduino Uno R3 o Arduino Mega 2560 está directamente vinculado al microcontrolador **ATmega16U2**. A diferencia del ICSP principal (que programa al chip central ATmega328P o ATmega2560),Este puerto sirve específicamente para **actualizar, reprogramar o recuperar el firmware del chip USB-a-Serie.**. \[[Forum Arduino](https://forum.arduino.cc/t/can-i-program-arduino-due-via-icsp1-spi-of-atmega16u2-mu/691733), [Editronikx](https://www.youtube.com/watch?v=JVvYht2bSoE\&t=5)]

Mirando la placa de frente, con el conector USB hacia la izquierda, el pin 1 se identifica generalmente con un **punto blanco** o un número "1" impreso en el PCB. La configuración estándar de 6 pinos es:texto

```
  (MISO)  1  ●  ●  2  (VCC)
   (SCK)  3  ●  ●  4  (MOSI)
 (RESET)  5  ●  ●  6  (GND)
```

Utilice el código con precaución.

* **Pin 1 (MISO):** Master In Slave Out (Entrada de datos).
* **Pin 2 (VCC):** Alimentación positiva (habitualmente +5V desde el bus USB).
* **Pin 3 (SCK):** Reloj serie (Reloj de sincronización).
* **Pin 4 (MOSI):** Entrada Master Out Slave (Salida de datos).
* **Pin 5 (RESET):** Reinicio del ATmega16U2 (Permite tomar control para programarlo).
* **Pin 6 (GND):** Tierra o referencia común. \[[1](https://aprendiendoarduino.wordpress.com/2016/11/06/icsp/), [2](https://descubrearduino.com/arduino-uno/), [4](https://www.todoelectronica.com/arduino-uno-r3-con-cable-usb-atmega328-compatible-con-arduino-original-p-110170.html?srsltid=AfmBOopSnStHF1mVrpSBPSKIXKH4Qd1FPUKQ8iZQ7Pd8az38C5nZiX2a)]

***

⚙️ ¿Para qué se utiliza este puerto?

1. **Recuperar placas "muertas":** Si tu ordenador dejó de reconocer el puerto COM o arroja fallos de comunicación USB inesperados, suele deberse a la corrupción del firmware en el ATmega16U2. \[[1](https://www.youtube.com/watch?v=JVvYht2bSoE\&t=5)]
2. **Cambiar la identidad de la placa:** Puedes cargarle firmwares externos (como el popular [proyecto LUFA](https://www.lcsc.com/blog/atmega16u2-microcontroller-guide/) o HoodLoader2) para transformar tu Arduino en un teclado nativo, un ratón MIDI o un joystick USB. \[[1](https://www.lcsc.com/blog/atmega16u2-microcontroller-guide/)]
3. **Quemar el Bootloader de fábrica:** Se usa un programador externo (como un USBasp o utilizando otro Arduino cargado con el sketch `ArduinoISP`) para reinstalar el firmware original de Arduino. \[[1](https://industrialmonitordirect.com/es/blogs/knowledgebase/atmega328p-bare-metal-avr-c-programming-without-arduino?srsltid=AfmBOooI3FlZUR3GqGMMEizyWnSWBRnds7tkoG1wG0p9ywSXZL8j7JfE)]







</details>



2.2 Displays LED, LCD y otros dispositivos de visualización.\
2.3 Codificadores de posición.

