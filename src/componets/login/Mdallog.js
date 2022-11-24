import { useState } from "react";

const Mdallog = ({ modalhandler }) => {
  const [error, setError] = useState(null);
  const [text, setText] = useState("");
  const formsubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      console.log(text);
    } else {
      setError("لطفا این قسمت را خالی نگزارید");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  return (
    <div onClick={() => modalhandler()} className="modal-login">
      <i className=" close"> &times; </i>

      <div onClick={(e) => e.stopPropagation()} className="iner-modal">
        <h1>
          <img src="../images/logo/logo.svg" alt="" />
        </h1>

        <p>
          <strong>سلام! لطفا شماره موبایل یا ایمیل خود را وارد کنید</strong>
        </p>
        <div className="form-parent">
          <form onSubmit={formsubmit} className="form" action="">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              className="input-modal"
              placeholder="شماره تلفن ایمیل"
            />
            {error ? <p> {error} </p> : null}
            <button type="btn" className="btn btn-danger w-100">
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mdallog;
