import "../styles/Contact.css"; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    objet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div id="contact" className="contact-container">
      <h2>CONTACTEZ-MOI</h2>
      <p>N’hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.</p>
      
      <div className="contact-wrapper">
        {/* FORMULAIRE */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="nom" placeholder="Nom *" required onChange={handleChange} />
            <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="email" name="email" placeholder="E-Mail *" required onChange={handleChange} />
            <input type="text" name="telephone" placeholder="Téléphone" onChange={handleChange} />
          </div>
          <input type="text" name="objet" placeholder="Objet *" required onChange={handleChange} />
          <textarea name="message" placeholder="Message *" required onChange={handleChange}></textarea>

          <div className="form-footer">

            <button type="submit" className="submit-btn">ENVOYER</button>
          </div>
        </form>

        <div className="contact-info">
          <p><FaEnvelope /> thomasiafrate04@gmail.com</p>
          <p><FaPhone /> 06 35 26 17 99</p>
          <p><FaMapMarkerAlt /> 84300 Cavaillon</p>
          <a href="https://linkedin.com/in/thomas-iafrate-21a35824b" target="_blank" rel="noopener noreferrer" className="linkedin">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
