import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import iconLogout from "../assets/logout.svg";

// data
import DataCss from "../data/DataCss";
import DataHtml from "../data/DataHtml";
import DataIntro from "../data/DataIntro";
// import DataJavascript from "../data/DataJavascript";
// import DataReactjs from "../data/DataReactJs";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.sessionStorage.getItem("token")) {
      navigate("/")
    }
  }, []);

  const handleLogout = () => {
    window.sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="container-dashboard">
      <div className="wrap-head">
        <div />
        <img
          src={iconLogout}
          alt=""
          title="logout"
          className="icon-logout"
          onClick={handleLogout}
        />
      </div>
      <div className="wrap html">
        <h2>Mukaddimah</h2>
        <p>mengenal apa itu Frontend dan Frontend Web Developer</p>
        <div className="wrap-cards">
          {DataIntro.map((data, id) => {
            return (
              <div className="wrap-pdf" key={id}>
                <img src={data.pict} alt={data.name} className="img-pdf" />
                <div className="wrap-btn">
                  <a href={data.pdf} download title="download now">
                    Download
                  </a>
                  <a
                    href={data.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="open now"
                  >
                    Open
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="wrap html">
        <h2>HTML (HyperText Markup Languange)</h2>
        <p>
          adalah bahasa markah standar untuk dokumen yang dirancang untuk
          ditampilkan di peramban internet.
        </p>

        <div className="wrap-cards">
          {DataHtml.map((data, id) => {
            return (
              <div className="wrap-pdf" key={id}>
                <img src={data.pict} alt={data.name} className="img-pdf" />
                <div className="wrap-btn">
                  <a href={data.pdf} download title="download now">
                    Download
                  </a>
                  <a
                    href={data.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="open now"
                  >
                    Open
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="wrap css">
        <h2>CSS (Casding Style Sheet )</h2>
        <p>
          adalah salah satu styling language (bahasa desain), bagian dari markup
          language yang dapat“mewarnai” atau mendesain suatu halaman website.
          CSS sendiri adalah singkatan dari Cascading Style Sheet. Markup
          language ini biasanya dipasangkan dengan markup language (bahasa
          marka) seperti HTML.
        </p>

        <div className="wrap-cards">
          {DataCss.map((data, id) => {
            return (
              <div className="wrap-pdf" key={id}>
                <img src={data.pict} alt={data.name} className="img-pdf" />
                <div className="wrap-btn">
                  <a href={data.pdf} download title="download now">
                    Download
                  </a>
                  <a
                    href={data.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="open now"
                  >
                    Open
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="wrap javascript">
        <h2>Javascript</h2>
        <p>
          adalah suatu bahasa pemrograman tingkat tinggi dan dinamis. JavaScript
          populer di internet dan dapat bekerja di sebagian besar penjelajah web
          populer seperti Google Chrome, Internet Explorer, Mozilla Firefox,
          Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web
          menggunakan tag script.
        </p>

        <div className="wrap-pdf-empty">
          <div className="img-empty">On Progress ...</div>
          <div className="wrap-btn">
            <a href="" className="btn-empty"></a>
            <a href="" className="btn-empty"></a>
          </div>
        </div>
      </div>
      <hr />
      <div className="wrap reactjs">
        <h2>REACT JS</h2>
        <p>
          adalah libray JavaScript yang digunakan untuk membangun user interface
          yang interaktif berbasis component. React yang dibuat oleh Facebook
          dan bersifat open-source, sehingga dapat digunakan oleh siapa saja
          secara gratis. Saat ini React dikelola oleh Meta, komunitas, dan
          perusahaan individu.
        </p>

        <div className="wrap-pdf-empty">
          <div className="img-empty">On Progress ...</div>
          <div className="wrap-btn">
            <a href="" className="btn-empty"></a>
            <a href="" className="btn-empty"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;