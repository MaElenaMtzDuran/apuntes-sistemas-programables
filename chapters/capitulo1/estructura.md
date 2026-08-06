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



2.2 Displays LED, LCD y otros dispositivos de visualización.\
2.3 Codificadores de posición.

