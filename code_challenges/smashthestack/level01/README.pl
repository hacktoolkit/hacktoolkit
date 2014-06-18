Witamy w IO wargame sieci smash the stack.
------------------------------------------

Dokonałeś trudnej rzeczy i znalazłeś nasze królestwo. Tutaj pozwalamy Ci przetestować
klasyczne, jak i świeże luki w oprogramowaniu. Z racji iż wielu z Was może nie 
wiedzieć jak działa wargame, w poniższych paragrafach znajduje się krótkie wprowadzenie.
Jeśli jesteś doświadczonym graczem, wszystkie te informacje będą Ci znane, możesz więc 
przejść do ostatniej sekcji gdzie wymienione zostały parametry tej konkretnej gry.

Wyzwania będą miały formę serii programów, różniących się rozmiarem od kilku linii
zawierających oczywisty błąd, przez wieksze, aż do prawdziwego oprogramowania.
Rozwiązaniem zawsze będzie wykorzystać te błędy w taki sposób, żeby przejąć kontrole
nad wykonywaniem aplikacji i zmusić ją do zrobienia tego, czego chcesz. Na przykład 
często możesz chcieć stworzyć shell.

Działa to na zasadzie plików wykonywalnych z bitem SUID. 
(http://pl.wikipedia.org/wiki/Setuid). W skrócie znaczy to tyle, że program
działa z uprawnieniami innego użytkownika niż ten, który go uruchamia. Celem jest
przejęcie kontroli nad wykonywaniem programu i zmuszenie go do wykonania naszego kodu.
To z koleji pozwoli Ci przeczytać hasło do nastepnego poziomu.

Jak zacząć?
-----------

Teraz zaprezentuje Ci pierwszy poziom. W tej chwili jesteśmy użytkownikiem "level1".
Oznacza to że możemy otwierać jednie pliki posiadane przez level1, albo z dostępem
dla każdego.

  level1@io:~# cd /levels
  level1@io:/levels# ls -las level1
  8 -r-sr-x--- 1 level2 level1 7500 Nov 16  2007 level1

Kiedy uruchomisz ten program, zapyta Cie o haslo, które musisz w jakis sposób
znaleźć i kiedy podasz je, otrzymasz nowy shell z uprawnieniami użytkownika level2.
Przy użyciu tego shella jesteś w stanie przeczytać plik z hasłem.

  level1@io:/levels$ ./level1 [coś co musisz odkryć idzie w to miejsce]
  Win.
  level1@io:/levels$ id
  uid=1001(level1) gid=1001(level1) euid=1002(level2) groups=1001(level1),1029(nosu)

Jak widzisz po wprowadzeniu komendy "id", masz teraz euid (effective user id) 
użytkownika level2. Możesz teraz czytać pliki należące do level2. Rozwiązaniem jest
wykorzystać to uprawnienie do przeczytania pliku z hasłem do nastepnego poziomu.

  level1@io:/levels$ cat /home/level2/.pass
  [BINGO UDAŁÓ SIĘ]

Znasz teraz hasło do nastepnego poziomu. Możesz zalogować się jako level2. Rozłacz
bierzące połączenie. Zaloguj sie ponownie jako level2 i wpisz hasło które właśnie
poznałeś. Kiedy to zrobisz, zauważysz że pracujesz jako użytkownik level2. W tym
momencie możesz zechcieć podzielić się ze światem swoim osiągnieciem. Jest to możliwe 
przez dodanie swojego taga, komentarza, albo czegokolwiek co Ci sie spodoba do pliku 
z tagami. Na przykład po wykonaniu następującej komendy:
  level2@io:~$ echo "<p>Lepper tu był i rozwalił level1</p>" >> tags

Bedzie to widoczne online pod tym adresem:
http://io.smashthestack.org:84/tags/level2.html

To chyba wszystko. Zezwalamy na (prawie) wszystko w pliku z tagami. Bądź kretywny,
ale zachowaj szczypte zdrowego rozsądku. Pamiętaj też żeby wyłączyć obsługę 
javascriptu kiedy przeglądasz ten plik w przeglądarce...

FAQ
---

Q: Jestem całkiem nowy w tym wszystkim, dam rade przejść tą gre? Jest trudna?
A: No cóż, to gra jest zróżnicowana. Pierwsza część, która kończy się około
   poziomu 10 jest dość prosta. Powinieneś/aś dać radę rozwiązać te
   poziomy bez wzglądu na Twoje przygotowanie, wiek, płeć, ... jeśli tylko
   masz trochę samozaparcia i zechcesz zapytać o pomoc. Potem bedziesz już z 
   przyjemnością uczyć sie podstaw z zadowalającym skutkiem. Następnie gra
   przechodzi do troszeczke bardziej zaawansowanych poziomów. Nie jest
   wstydem utknąc w tym miejscu i prosić o pomoc czy wskazówki. Albo odłożyć
   to na jakis czas. Smashthestack był i jeszcze przez jakiś czas będzie 
   trwał w stabilny sposób przynajmniej w nadchodzącej przyszlości.

Q: Czy jest gdzieś miejsce gdzie moze zapisywac pliki?
A: Tak, możesz pisac w katalogu /tmp.
   Jednakże ten katalog jest ustawiony w ten sposób, że nie możesz 
   wyświetlić listy plików ktore się w nim znajdują. To po to, zeby
   nie można bylo w prosty sposób dostać sie do plików nad którymi 
   pracują inni gracze. Zachęcamy do tworzenia własnych podkatalogów
   do pracy. Na przykład przez wykonanie poniższych komend.

   mkdir /tmp/costrudnegodozgadniecia
   cd /tmp/costrudnegodozgadniecia

   Możesz teraz wyświetlać listę, przechowywać tymczasowe pliki i co
   tylko w tym katalogu. Cyklicznie bedziemy czyścić ten katalog
   jak tylko zajdzie potrzeba. Zwykle bedzie to ogłoszone na czacie.
   Jakkolwiek zwykle dobrym pomysłem jest mieć lokalna kopie swojej pracy.

Q: Czy macie liste artykułow ktore powinienem/am przeczytać do poziomu X?
A: Zazwyczaj jest kilka rzeczy które możesz przeczytać, ale nie ma 
   rozgranicznienia na poziomy. Możesz śmiało próbować szczęscia na 
   czacie ze swoim pytaniem. Mimo to niezależne poszukiwania i dociekawnia
   nad istotą problemu są częścia gry. Z tego powodu nie zawsze dostaniesz
   gotowca. IO nie jest testem na czytanie ze zrozumieniem.

Q: Dlaczego nie moge używać su?
A: Su zajmuje procesy bez żadnego dobrego powodu. Z racji że naszym celem
   jest utrzymywać maszyne w sprawności dla każdego limitujemy ilość 
   procesów. Z powodu uniknięcia problemów wyłączyliśmy su i wymagamy
   żebyś łączył się ponownie.

Q: Dlaczego nie moge używać nano, vim'a, ... do edycji pliku z tagami?
A: Pliki z tagami sa ustawione na "tylko dopisuj" i z powodu czegoś pod
   nazwą błedu edytora mają one tendencje do nadpisywania części pliku
   zamiast dopisywania. Będziesz musiał(a) skorzystać z dopisującego (>>)
   przekierowania wyników.

Q: Podoba mi sie to readme,z żebym je przetłumaczył?
A: Jasne, możesz zalogować sie na nasz serwer IRC albo wysłać je do kogoś
   mailem to somebody. Adresy email powinny byc w motd(wiadomość dnia).

Q: Mocno staram sie uczyć, ale każdy shellcode którego próbuje wciąż
   kończy sie błędem segmentacji. Co jest?!
A: Prawdopodobnie kompilujesz poziomy albo swój kod ręcznie bez brania pod
   uwagę że pewnie sekcje pamięci nie są domyślnie wykonywalne. To
   obecny stan ustawień i nie mamy w domyśle żeby to ukrywać przed graczami.
   Wszystkie poziomy w tej grze maja wykonywalny stos. Jest kilka powodów
   ku temu. Głównie z powodu że prace nad ominięciem niektórych zabezpieczeń
   są zbyt skomplikowane dla tej gry.

   Jeśli chcesz przetestować shellcode możesz użyć kodu podobnego do
   tego załączonego poniżej:

   #include <sys/mman.h>
   #include <string.h>
   #include <stdio.h>

   char sc[]= "tutaj daj swój shellcode";

   int main(){
        void * a = mmap(0, 4096, PROT_EXEC |PROT_READ | PROT_WRITE, MAP_ANONYMOUS | MAP_SHARED, -1, 0);
        printf("Zalokowałem wykonywalna pamięc pod: %p\n", a);
        ((void (*)(void)) memcpy(a, sc, sizeof(sc)))();
        }


Q: Dlaczego ten dokument ma tyle błędów ortograficznych?
A: Został przetłumaczony przez Spl0ita.



Parametry gry
-------------

- poziomy są w katalogu /levels
- hasła są przechowywane w katalogach domowych dla danego poziomu,
  w pliku o nazwie .pass; na przykład: /home/level2/.pass zawiera hasło
  dla użytkownika "level2"
- czat:
        Kanał znajduje się w sieci IRC irc.smashthestack.org, ssl port 6697
        Możesz też używać klienta webowego: http://www.smashthestack.org/cgiirc/
- forum:
        Na naszej stronie http://forum.smashthestack.org/, ale na IRC prawdopodobnie
        pomogą Ci szybciej i lepiej 

- aslr jest wyłączony i wiekszość poziomów ma wykonywalny stos