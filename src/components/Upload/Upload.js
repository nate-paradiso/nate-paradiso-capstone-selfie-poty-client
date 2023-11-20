import axios from "axios";
import { useState } from "react";
import "./Upload.scss";

export const Upload = ({ user }) => {
  const [uploadForm, setUploadForm] = useState({
    title: "",
    category: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formSubmitHandler = async (e, title, category) => {
    e.preventDefault();
    if (user) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("image", e.target[2].files[0]);
      try {
        const token = sessionStorage.getItem("token");
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/users/current/${user.id}/images/upload`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
            title: title,
            category: category,
          },
        );
        setSuccess(true);
        setUploadForm({ title: "", category: "" });
      } catch (error) {
        console.error("Error posting image:", error.message);
      }
    }
  };

  const handleChange = e => {
    setUploadForm({
      ...uploadForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!uploadForm.title || !uploadForm.category) {
      setError("** Please fill in each field **");
      return;
    }

    setError(false);

    formSubmitHandler(event, uploadForm.title, uploadForm.category);
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const fileContent = reader.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <section>
      <form className="upload__form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="upload__form-container">
          <input
            className="upload__form-text"
            type="text"
            name="title"
            id="title"
            value={uploadForm.title}
            onChange={handleChange}
            placeholder="title"
          />
          <select
            className="upload__form-dropdown"
            name="category"
            id="category"
            value={uploadForm.category}
            onChange={handleChange}
            placeholder="category"
          >
            <option value="">Select Category</option>
            <option value="AI Selfie">AI Selfie</option>
            <option value="Phone Selfie">Phone Selfie</option>
            <option value="Underwater">Underwater</option>
            <option value="Self Portrait">Self Portrait</option>
          </select>
        </div>
        <div className="button-container">
          {" "}
          <button className="button-container__upload">
            <input id="upload" accept="image/*" type="file" onChange={e => handleFileChange(e)} />
            Upload
          </button>
        </div>
      </form>
      {success && <p className="upload__success">Upload successful!</p>}
      {error && <p className="upload__error">{error}</p>}
    </section>
  );
};
