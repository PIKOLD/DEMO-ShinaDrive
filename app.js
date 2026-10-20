(() => {
  const button = document.querySelector('[data-copy-phone]');
  const toast = document.querySelector('.toast');
  let dismiss;
  button?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('+7 (920) 346-35-57');
      toast.textContent = 'Номер скопирован';
      toast.classList.add('is-visible');
      clearTimeout(dismiss);
      dismiss = setTimeout(() => toast.classList.remove('is-visible'), 2500);
    } catch {
      toast.textContent = 'Номер: +7 (920) 346-35-57';
      toast.classList.add('is-visible');
      clearTimeout(dismiss);
      dismiss = setTimeout(() => toast.classList.remove('is-visible'), 5000);
    }
  });
})();
