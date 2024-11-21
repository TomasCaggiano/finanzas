import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const AddTransactionForm = ({ userId }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !date) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    try {
      setLoading(true);

      //subcolección del usuario
      const transactionsRef = collection(db, `users/${userId}/transactions`);

      // Agregartransacción
      await addDoc(transactionsRef, {
        amount: parseFloat(amount),
        type,
        description,
        date: Timestamp.fromDate(new Date(date)),
      });

      setSuccessMessage("¡Transacción añadida exitosamente!");
      // Reiniciar formulario
      setAmount("");
      setType("income");
      setDescription("");
      setDate("");
    } catch (error) {
      console.error("Error al agregar la transacción:", error);
      alert("Hubo un problema al agregar la transacción.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Agregar Transacción</h3>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Monto: *</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ej: 1000"
            required
          />
        </div>
        <div>
          <label>Tipo: *</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Ingreso</option>
            <option value="expense">Egreso</option>
          </select>
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ej: Pago del cliente"
          />
        </div>
        <div>
          <label>Fecha: *</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Agregar"}
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
