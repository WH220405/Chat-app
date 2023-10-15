import { MdOutlineImage } from "react-icons/md";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

//import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(
        storage,
        `avatars/${response.user.uid}/${file.name}`
      );

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        () => {
          // Progress tracking (optional)
        },
        error => {
          console.error("Error uploading avatar:", error);
          setErr(true);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateProfile(response.user, {
              displayName: enterName, // Assuming enterName is the user's display name
              photoURL: downloadURL,
            });
            console.log("User profile updated successfully.");
          } catch (err) {
            console.error("Error updating user profile:", err);
            setErr(true);
          }
        }
      );
    } catch (err) {
      console.error("Error creating user:", err);
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hernandez Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter name" />
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <input style={{ display: "none" }} type="file" id="file" />
          {/* Hiden choose file */}
          <label htmlFor="file">
            <MdOutlineImage size={30} color="blue" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
