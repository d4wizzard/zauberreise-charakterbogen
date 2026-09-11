/* Read-only shared market; purchases remain authenticated Twitch commands. */
(function () {
  const host = document.getElementById('marketOffers');
  const status = document.getElementById('marketStatus');
  if (!host || !status) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  async function refresh() {
    try {
      const response = await fetch('https://zauberreise-live.d4wizzard.workers.dev/api/state/736368656e6b65000000000000000000', {cache:'no-store'});
      if (!response.ok) throw Error();
      const market = (await response.json()).state?.Market;
      if (!market || !Array.isArray(market.Offers)) {
        status.textContent = 'Marktangebote wurden noch nicht übertragen. Im Chat: !zr marktstand liste';
        host.innerHTML = ''; return;
      }
      const time = Date.parse(market.UpdatedUtc);
      const stale = !Number.isFinite(time) || Date.now() - time > 120000;
      status.textContent = `${stale ? 'Älterer Stand – vor dem Kauf im Chat prüfen.' : 'Zuletzt übertragene Angebote.'} ${Number.isFinite(time) ? 'Stand: ' + new Date(time).toLocaleString('de-DE') : ''}`;
      host.innerHTML = market.Offers.map(offer => {
        const number = Number(offer.Number), price = Number(offer.Price);
        if (!Number.isInteger(number) || number < 1 || !Number.isFinite(price) || price < 1) return '';
        const created = Date.parse(offer.CreatedUtc);
        const expired = !Number.isFinite(created) || Date.now() - created >= 7 * 86400000;
        return `<article class="item"><div class="item-head"><h2>#${number} · ${escape(offer.Name)}</h2><b class="price">${price} Silber</b></div><p>${escape(offer.Quality)} · ${escape(offer.Slot)}</p><p>Verkäufer: @${escape(offer.SellerName)}</p>${expired ? '<p>Abgelaufen oder ungeprüft – Marktstand im Chat aktualisieren.</p>' : `<code class="command">!zr marktstand kaufen ${number}</code>`}</article>`;
      }).join('') || '<p>Derzeit sind keine Angebote hinterlegt.</p>';
    } catch {
      status.textContent = 'Markt derzeit nicht erreichbar. Angebote im Chat mit !zr marktstand liste prüfen.';
      host.innerHTML = '';
    }
  }
  refresh(); setInterval(refresh, 8000);
})();
