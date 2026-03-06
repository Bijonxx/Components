document.querySelectorAll('.custom_select').forEach(select => {
  const trigger = select.querySelector('.custom_select_trigger');
  const options = select.querySelectorAll('.custom_option');
  const label = trigger.querySelector('span');

  trigger.addEventListener('click', () => {
    select.classList.toggle('open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      label.textContent = option.textContent;
      options.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      select.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
});
