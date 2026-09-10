(function (root) {
  'use strict';
  const counters = {sturmangriff:'kampf',ritual:'magie',falle:'dieb','verstärkung':'barde',gift:'heilung',fluch:'heilung'};
  function canInterrupt(enemy, characterClass) {
    if (!enemy || Number(enemy.Hp) <= 0 || enemy.IntentInterrupted || counters[enemy.Intent] !== characterClass) return false;
    const parts=enemy.BodyParts||{},disabled=part=>Object.hasOwn(parts,part)&&Number(parts[part])<=0;
    return !(disabled('arme')&&['ritual','falle'].includes(enemy.Intent)) && !(disabled('beine')&&enemy.Intent==='sturmangriff');
  }
  function commandText(characterClass) {
    const text={kampf:'Sturmangriff aufhalten',magie:'Ritual bannen',dieb:'Falle entschärfen',barde:'Verstärkungsruf übertönen',heilung:'Giftladung neutralisieren oder Fluch bannen'};
    return (text[characterClass]||'Passende Gegnerabsicht unterbrechen')+'. Gültiger Versuch: eine Kampfaktion und die übliche Ration, auch bei Fehlschlag. Erfolg verhindert die ganze nächste Aktion dieses Gegners. Falsche Ziele kosten nichts.';
  }
  function renderTelegraph(enemy,esc) {
    return enemy?.Intent ? ' · Absicht: '+esc(enemy.Intent)+(enemy.IntentInterrupted?' (⚡ unterbrochen)':'') : '';
  }
  function renderKnowledge(intentions,esc) {
    const entries=Object.entries(intentions||{});
    if (!entries.length) return '<p>Noch keine ausgeführte Absicht oder erfolgreiche Unterbrechung beobachtet.</p>';
    return '<ul>'+entries.map(([intent,data])=>'<li><b>'+esc(intent)+'</b> – '+Math.max(0,Number(data?.Observed)||0)+'× ausgeführt, '+Math.max(0,Number(data?.Interrupted)||0)+'× unterbrochen<br>'+esc(data?.Effect||'Wirkung noch unbekannt.')+'<br><em>'+esc(data?.Counter||'Gegenmaßnahme noch unbekannt.')+'</em></li>').join('')+'</ul>';
  }
  root.ZrIntentions={canInterrupt,commandText,renderTelegraph,renderKnowledge};
})(typeof window==='undefined'?globalThis:window);
