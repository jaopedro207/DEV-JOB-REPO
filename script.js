// Você pode adicionar interações JavaScript aqui se necessário
document.addEventListener('DOMContentLoaded', function() {
  // Exemplo: Adicionar classe quando elemento estiver visível
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, { threshold: 0.1 });

  // Observar todos os elementos com a classe 'observe-me'
  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
  });
});