import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import ModalLogout from "../components/ModalLogout";

// data
import DataCss from "../data/DataCss";
import DataHtml from "../data/DataHtml";
import DataIntro from "../data/DataIntro";
import DataDasar from "../data/DataDasar";
import DataJavascript from "../data/DataJavascript";
// import DataReactjs from "../data/DataReactJs";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container-dashboard">
      <div className="wrap-head">
        <div />
        <ModalLogout />
      </div>
      <div className="wrap html">
        <h2>Mukaddimah</h2>
        <p>mengenal apa itu Frontend dan Frontend Web Developer</p>
        <div className="wrap-cards">
          {DataIntro.map((data, id) => {
            return (
              <div className="wrap-pdf" key={id}>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img src={data.pict} alt={data.name} className="img-pdf" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="wrap html">
        <h2>Pemograman Dasar</h2>
        <p>mengenal dasar-dasar pemograman</p>
        <div className="wrap-cards">
          {DataDasar.map((data, id) => {
            return (
              <div className="wrap-pdf" key={id}>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img src={data.pict} alt={data.name} className="img-pdf" />
                </a>
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
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img src={data.pict} alt={data.name} className="img-pdf" />
                </a>
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
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img src={data.pict} alt={data.name} className="img-pdf" />
                </a>
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

        <div className="wrap-cards">
          {DataJavascript.map((data, id) => {
            return (
              <div className="wrap-pdf" key={id}>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img src={data.pict} alt={data.name} className="img-pdf" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="wrap reactjs">
        <h2>React JS</h2>
        <p>
          adalah libray JavaScript yang digunakan untuk membangun user interface
          yang interaktif berbasis component. React yang dibuat oleh Facebook
          dan bersifat open-source, sehingga dapat digunakan oleh siapa saja
          secara gratis. Saat ini React dikelola oleh Meta, komunitas, dan
          perusahaan individu.
        </p>

        <div className="wrap-pdf-empty">
          <div className="img-empty">On Progress ...</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
