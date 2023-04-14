import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="a6-1-parent">
      <div className="a6-11">
        <div className="a6-1-inner" />
        <div className="rectangle-div" />
        <header className="header1">
          <b className="election-commission-of1">
            ELECTION COMMISSION OF INDIA
          </b>
          <img className="logo1-1-icon1" alt="" src="/logo1-1@2x.png" />
          <b className="marathi-text6">
            <span>{` `}</span>
            <span className="span">मतदाता फोटो पहचान पत्र</span>
          </b>
          <div className="marathi-text7">
            <span>{` `}</span>
            <b> भारत निर्वाचन आयोग</b>
          </div>
          <div className="header-item" />
          <b className="elector-photo-identity1">
            मतदाता फोटो पहचान पत्रELECTOR PHOTO IDENTITY CARD
          </b>
          <img
            className="election-commission-preview-1-icon1"
            alt=""
            src="/electioncommission-preview-1@2x.png"
          />
        </header>
        <section className="footerinputs1">
          <b className="electors-name1">ELECTOR’S NAME:</b>
          <b className="fathers-name1">FATHER’S NAME :</b>
          <b className="sex1">{`/ SEX       : `}</b>
          <b className="marathi-text8">लिंग</b>
          <b className="marathi-text9">जन्म की तारीख:</b>
          <b className="date-of-birthage1">{`DATE OF BIRTH/AGE : `}</b>
          <div className="marathi-text10">
            <span>{` `}</span>
            <b>निर्वाचक का नाम:</b>
          </div>
          <b className="marathi-text11">पिता का नाम:</b>
          <input className="ob-formsname" type="text" />
          <input className="ob-formsname1" type="text" placeholder="Name" />
          <textarea className="nameip1" />
          <textarea className="rnameip1" />
          <textarea className="dob1" />
        </section>
        <main className="central1">
          <img className="download-1-icon1" alt="" src="/download-1@2x.png" />
          <img className="photo-icon1" alt="" src="/photo@2x.png" />
        </main>
      </div>
    </div>
  );
};

export default FrameComponent1;
