import "./Contact.scss";

const Contact = () => {
  const email = "seuemail@example.com";

  return (
    <section className="contact">
      <h2>Entre em Contato</h2>
      <p>Tem alguma dúvida ou quer trocar uma ideia? Me envie um e-mail!</p>
      <a href={`mailto:${email}`} className="contact-button">
        Enviar E-mail
      </a>
    </section>
  );
};

export default Contact;
