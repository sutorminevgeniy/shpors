.onlySR {
  position: absolute !important;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}


<div aria-live="polite" role="log" aria-relevant="additions" aria-atomic="false" style="position: absolute; width: 1px; height: 1px; margin-top: -1px; clip: rect(1px, 1px, 1px, 1px); overflow: hidden;">
  <div>The stimulus voltage was changed to 4.2 volts.</div>
  <div>The stimulus voltage was changed to 4.3 volts.</div>
</div>



так как они просят сделать не получится. если скрыть aria live с помощью aria hidden то никакой ридер ее не увидит никогда.

на ios когда добавляется новое сообщение оно заменяет то что там было тем самым в aria live будет всегда только одно сообщение
на остальных девайсах сообщения добавляются как лог действий и удаляются спустя время которое для андроида будет 1506 миллисекунд 
для других девайсов кроме ios (на нем не удаляется) будет 
150 * количество символов в тексте + 10 секунд

задержки сделаны для того что бы ридер смог прочитать большой текст так как если установить фиксированное время то на андроиде, к примеру, ридер может прекратить чтение прямо посреди слова.


olga.volosatova [3:20 PM]
просто у тебя вроде как есть опыт.. обычно новым сотрудникам дают разработать основные элементы 
  http://jarvis:8090/pages/viewpage.action?pageId=50856409
по поводу серии презентаций - Презентация и материалы к ней лежат тут: 
  "\\STAR\z\depts\DVR\GROUPs\ГАиТ\All for QA\Presentations\Accessibility\WCAG2.1 Объяснение\
Здесь можешь найти тесты по новому стандарту, которые назначены на тебя и пройти их 
  http://competentumlms/skpages/learning/default.aspx 
если тестов нет, напиши, я добавлю