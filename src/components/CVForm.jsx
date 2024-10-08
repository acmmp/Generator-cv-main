import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const CVForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateCV();
  };

  const generateCV = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.text(formData.name, 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Email: ${formData.email}`, 20, 30);
    doc.text(`Teléfono: ${formData.phone}`, 20, 40);
    
    doc.setFontSize(16);
    doc.text('Educación', 20, 60);
    doc.setFontSize(12);
    doc.text(formData.education, 20, 70);
    
    doc.setFontSize(16);
    doc.text('Experiencia', 20, 100);
    doc.setFontSize(12);
    doc.text(formData.experience, 20, 110);
    
    doc.setFontSize(16);
    doc.text('Habilidades', 20, 150);
    doc.setFontSize(12);
    doc.text(formData.skills, 20, 160);
    
    doc.save('cv.pdf');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre completo" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" required />
      <textarea name="education" value={formData.education} onChange={handleChange} placeholder="Educación" required></textarea>
      <textarea name="experience" value={formData.experience} onChange={handleChange} placeholder="Experiencia laboral" required></textarea>
      <textarea name="skills" value={formData.skills} onChange={handleChange} placeholder="Habilidades" required></textarea>
      <button type="submit">Generar CV</button>
    </form>
  );
};

export default CVForm;