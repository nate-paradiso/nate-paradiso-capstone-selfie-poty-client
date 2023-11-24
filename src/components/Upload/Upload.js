import axios from "axios";
// import { readAndCompressImage } from "browser-image-resizer";
import { useState } from "react";
import "./Upload.scss";

export const Upload = ({ user, getUserImages }) => {
  const [uploadForm, setUploadForm] = useState({
    title: "",
    category: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formSubmitHandler = async (e, title, category) => {
    e.preventDefault();
    if (user) {
      const file = document.getElementById("upload").files[0];

      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("image", file);

      const token = sessionStorage.getItem("token");
      try {
        // const resizedImage = await readAndCompressImage(file, {
        //   quality: 0.7,
        //   maxWidth: 1200,
        // });
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/users/current/${user.id}/upload`,
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
        console.log(response.data);
        setSuccess(true);
        setUploadForm({ title: "", category: "" });

        getUserImages();
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

  return (
    <section className="upload">
      <form className="upload__form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="upload__form-container">
          <p className="upload__title">upload here</p>
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
          >
            <option value="" className="upload__form-dropdown--options">
              {" "}
              select a category{" "}
            </option>
            <option className="upload__form-dropdown--options" value="AI Selfie">
              AI Selfie
            </option>
            <option className="upload__form-dropdown--options" value="Phone Selfie">
              Phone Selfie
            </option>
            <option className="upload__form-dropdown--options" value="Underwater">
              Underwater
            </option>
            <option className="upload__form-dropdown--options" value="Self Portrait">
              Self Portrait
            </option>
          </select>{" "}
          <div className="upload__input-container">
            <label htmlFor="upload" className="button-container__choose">
              Choose a File
            </label>
            <input
              id="upload"
              accept="image/jpg, image/jpeg, image/png"
              type="file"
              className="visually-hidden"
            />
          </div>
          <button className="button-container__upload">Upload</button>
        </div>
      </form>
      {success && <p className="upload__success">Upload successful!</p>}
      {error && <p className="upload__error">{error}</p>}
    </section>
  );
};
