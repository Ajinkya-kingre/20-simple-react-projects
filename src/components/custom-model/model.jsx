import "./model.css";

export default function Model({ id, header, body, footer, onclose }) {
  return (
    <div id={id || "model"} className="model">
      <div className="model-content">
        <div className="header">
          <span onClick={onclose} className="close-icon">
            &times;
          </span>
          <h2>{header ? header : "header"}</h2>
        </div>
        <div className="body">
          {body ? body : <div>This is content's Body</div>}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}
