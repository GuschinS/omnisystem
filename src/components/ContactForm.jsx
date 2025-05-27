// src/components/ContactForm.jsx
export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Напишите нам</h2>
        <form action="https://formspree.io/f/xgvkjdjr" method="POST" className="max-w-lg mx-auto space-y-4">
          <input type="text" name="name" placeholder="Имя" required className="w-full p-3 rounded text-black" />
          <input type="email" name="email" placeholder="E-mail" required className="w-full p-3 rounded text-black" />
          <textarea name="message" placeholder="Сообщение" required className="w-full p-3 rounded text-black"></textarea>
          <button type="submit" className="bg-accent hover:bg-primary px-6 py-3 rounded text-white">Отправить</button>
        </form>
      </div>
    </section>
  );
}