Bienvenido al wargame IO de la red smashthestack
------------------------------------------------

Has hecho lo más difícil: encontrar nuestro sitio. Aquí puedes experimentar con
diversos tipos de vulnerabilidades (clásicas y actuales) en programas. Es
posible que algunos no estéis familiarizados con el funcionamiento de los
wargames, así que haremos una breve introducción en los siguientes párrafos. Si
eres ya un wargamer experto quizá prefieras pasar a la siguiente parte, donde
se describen las particularidades de IO.

Los problemas se presentan como una serie de programas de tamaño variable,
desde unas pocas líneas con un fallo obvio hasta programas algo mayores, y
finalmente programas reales. Lo que hay que hacer es aprovecharse del fallo
para tomar el control de la ejecución de los programas y que hagan lo que tú
quieras. Por ejemplo, en muchos casos querrás que ejecuten un intérprete de
comandos (shell).

Esto funciona porque los binarios son SUID
(http://en.wikipedia.org/wiki/Setuid). Esto significa, en pocas palabras, que
se ejecutan con los privilegios de otro usuario diferente a ti. El objetivo es
tomar el control del programa y hacer que ejecute tu propio shellcode, lo que a
su vez te permitirá leer la contraseña del siguiente nivel.


Cómo empezar
------------

Tranquilo, bla va a guiarte por el primer nivel. Actualmente eres el usuario
"level1". Esto significa que sólo puedes acceder a los archivos cuyo
propietario es level1 y a los que son accesibles para todos.

  level1@io:~# cd /levels
  level1@io:/levels# ls -las level1
  8 -r-sr-x--- 1 level2 level1 7500 Nov 16  2007 level1

Cuando lo ejecutes, te pedirá una contraseña. Debes encontrarla de algún modo,
y cuando se la proporciones, obtendrás una shell con los privilegios del usuario
level2. Usando esta shell podrás leer el archivo /home/level2/.pass.

  level1@io:/levels$ ./level1 [la contraseña que tienes que adivinar]
  Win.
  level1@io:/levels$ id
  uid=1001(level1) gid=1001(level1) euid=1002(level2) groups=1001(level1),1029(nosu)

Como puedes ver por la salida del comando "id", ahora tu euid (id efectiva) es
level2. En este momento puedes leer los archivos que pertenecen al usuario
level2. El objetivo final es utilizar estos privilegios para leer el archivo
que contiene la contraseña para el siguiente nivel.

  level1@io:/levels$ cat /home/level2/.pass
  [ALBRICIAS]

Ahora tienes la contraseña para el nivel 2. Puedes logearte como level2. Cierra
la conexión actual, entra como level2 y utiliza la contraseña que acabas de
encontrar. Comprobarás que ahora eres level2. En este punto, es posible que
quieras decirle al mundo lo que has conseguido. Puedes hacerlo añadiendo un
comentario o lo que quieras al archivo tags, usando por ejemplo el siguiente
comando:

  level2@io:~$ echo "<p>superleetzor was here and pwnd level1</p>" >> tags

Lo podrá ver todo el mundo aquí:
http://io.smashthestack.org:84/tags/level2.html

Y eso es todo. En los archivos de tags está permitido casi todo, puedes ser
creativo. Siempre con sentido común, claro. Recomendamos desactivar javascript
al visualizar estas páginas...


FAQ
---

P: Soy muy nuevo en todo esto; ¿podré resolver el juego? ¿Es muy difícil?  
R: Bueno, el juego tiene varias etapas. La primera etapa dura más o menos hasta el
   nivel 10, y es relativamente fácil. En principio podrás resolverla
   independientemente de cuál sea tu formación, sexo, edad... Si tienes voluntad y
   pides un poco de ayuda en el canal de IRC. Al superar esa etapa expermientarás
   la agradable sensación de conocer bastante bien los principios básicos. Los
   siguientes niveles son un poco más avanzados. Es normal quedarse atascado a
   veces en ellos, y solicitar asistencia en el canal, o tomarse un descanso de
   cuando en cuando. Smashthestack ha sido y continuará siendo estable.

P: ¿Hay algún sitio donde pueda crear archivos?
R: Sí, puedes escribir en el directorio /tmp. Sin embargo, no puedes listar sus
   contenidos. Hacemos esto para que no puedas acceder fácilmente a los archivos
   de otros jugadores. Te recomendamos que crees tu propio subdirectorio para
   jugar, con estos dos comandos, por ejemplo:
   
   mkdir /tmp/algodificildeadivinar
   cd /tmp/algodificildeadivinar
   
   ahora puedes crear archivos, listarlos, etc. en este directorio. Limpiaremos el
   directorio /tmp de vez en cuando si resulta necesario. Normalmente esto se
   anunciará en el canal. No obstante, es posible que guardar una copia en tu
   ordenador sea buena idea.

P: ¿Hay alguna lista de artículos que puedan ayudarme a resolver el nivel X?
R: Normalmente habrá algunos documentos que puedan ayudarte, pero no hay una
   lista específica para cada nivel. Puedes preguntar en el canal. De todos modos,
   la investigación independiente y la búsqueda del fallo son parte del juego, así
   que no siempre encontrarás un documento en el que esté todo explicado. IO no es
   un ejercicio de lectura comprensiva.

P: ¿Por qué no puedo usar su?
R: su hace que se ejecuten más procesos, y no existe ninguna buena razón para
   permitirlo. Queremos mantener el equipo estable para que lo pueda usar todo el
   mundo, así que limitamos la cantidad de procesos. Por eso, para prevenir
   problemas, deshabilitamos su, y tienes que reconectarte.

P: ¿Por qué no puedo usar nano, vim... para editar el archivo tags?
R: Los archivos de tags están en modo "append only", y debido a algo llamado el
   bug del editor, los editores tienden a reescribir partes del archivo en lugar
   de escribir sólo al final. Tienes que usar el operador de redirección de salida
   >>.

P: Me encanta este README, ¿puedo traducirlo?
R: ¡Sí! Puedes entrar en el IRC o enviarnos un email. Habrá algún email en el
   motd.

P: Estoy intentando practicar, pero ningún shellcode que pruebo funciona, ¿Qué
   pasa?
R: Probablemente estás compilando los niveles manualmente sin tener en cuenta
   que algunas partes de la memoria, por defecto, no son ejecutables. Esta es la
   situación actual, y no queremos que nadie se lleve a engaño. Sin embargo, en la
   mayoría de los niveles del juego el stack sí es ejecutable. Hay varias razones
   para ello. La principal es que las técnicas para eludir ciertas protecciones
   son demasiado complicadas para ponerlas en práctica en cada nivel. Los niveles
   más avanzados sí que tratan estos problemas.

   Cuando quieras probar un shellcode, puedes utilizar un programa parecido
   a este, por ejemplo:
   
   #include <sys/mman.h>
   #include <string.h>
   #include <stdio.h>
   
   char sc[]= "la shellcode que quieras probar";
   
   int main(){
           void * a = mmap(0, 4096, PROT_EXEC |PROT_READ | PROT_WRITE, MAP_ANONYMOUS | MAP_SHARED, -1, 0);
           printf("allocated executable memory at: %p\n", a);
           ((void (*)(void)) memcpy(a, sc, sizeof(sc)))();
   }
   
P: ¿Porqué hay tantos errores en este documento?
R: Es una pésima traducción de un documento que escribió bla malamente.




Particularidades de IO
----------------------

- Los niveles están en el directorio /levels
- Las contraseñas están almacenadas en el directorio home de cada nivel, en un
  archivo llamado .pass. Por ejemplo, /home/level2/.pass contiene la contraseña
  del usuario "level2".
- Chat:
        Estamos en el chat. irc.smashthestack.org, ssl puerto 6697.
        También puedes utilizar el cliente web http://www.smashthestack.org/cgiirc/
- Foro: 
        En nuestra web http://forum.smashthestack.org/, aunque el chat te servirá más y mejor
- aslr está deshabilitado y el stack es ejecutable en la mayoría de niveles
